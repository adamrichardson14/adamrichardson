import PostListItem from "../components/PostListItem";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Code({ snippets }) {
  return (
    <Wrapper>
      <div>
        <div className="text-gray-300 text-lg">
          <h1>
            Code Snippets: A place where I will drop my most frequently used code snippets for easy
            access.
          </h1>
        </div>
        {snippets &&
          snippets.map((snippet) => <PostListItem type="code" key={snippet.slug} data={snippet} />)}
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter("code");

  return { props: { snippets } };
}
