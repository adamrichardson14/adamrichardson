import hydrate from "next-mdx-remote/hydrate";

import BlogLayout from "../../components/BlogLayout";
import MDXComponents from "../../components/MDXComponents";
import Wrapper from "../../components/Wrapper";
import { getFileBySlug, getFiles } from "../../lib/mdx";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Wrapper>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("code");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("code", params.slug);

  return { props: post };
}
