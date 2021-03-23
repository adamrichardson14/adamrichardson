import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";
import readingTime from "reading-time";

import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "content", type));
}

export async function getFileBySlug(type, slug) {
  const source = fs.readFileSync(path.join(root, "content", type, `${slug}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("../lib/codeTitles"),
        require("remark-autolink-headings"),
        require("remark-slug"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "content", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, "content", type, postSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
