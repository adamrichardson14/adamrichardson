import hydrate from "next-mdx-remote/hydrate";

import BlogLayout from "./BlogLayout";
import MDXComponents from "./MDXComponents";
import Wrapper from "./Wrapper";

export default function MDXContentOnPage({ src, frontMatter }) {
  const content = hydrate(src, {
    components: MDXComponents,
  });
  return (
    <Wrapper>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
    </Wrapper>
  );
}
