import PostListItem from "../components/PostListItem";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Code({ posts }) {
  return (
    <Wrapper>
      <div>
        <div className="text-gray-300 text-lg">
          <h1>The Blog: Occasional educational content. Predominantly ramblings.</h1>
        </div>
        {posts && posts.map((posts) => <PostListItem type="blog" key={posts.slug} data={posts} />)}
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("post");

  return { props: { posts } };
}
