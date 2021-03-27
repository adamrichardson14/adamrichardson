import MDXContentOnPage from "../components/MDXContentOnPage";
import { getFileBySlug } from "../lib/mdx";
export default function Privacy({ mdxSource, frontMatter }) {
  return <MDXContentOnPage src={mdxSource} frontMatter={frontMatter} />;
}

export async function getStaticProps() {
  const page = await getFileBySlug("pages", "services");

  return { props: page };
}
