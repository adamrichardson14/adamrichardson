import { useState } from "react";

import OGContainer from "../components/OGContainer";
import PostListItem from "../components/PostListItem";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Code({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const blogPosts = posts
    .sort((a, b) => Number(new Date(b.published)) - Number(new Date(a.published)))
    .filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <Wrapper>
      <OGContainer description="The Blog: Occasional educational content. Predominantly ramblings.">
        <div>
          <div className="text-gray-300 text-lg">
            <h1>
              The Blog: Whenever I come across anything useful, I like to write blog posts about it.
              This helps me to learn and have something to come back to. You may occasionally find
              something useful here.
            </h1>
          </div>
          <div className="my-4">
            <label className="text-gray-300 text-sm" htmlFor="blogPosts">
              Search blog posts
            </label>
            <div>
              <input
                style={{ caretColor: "white" }}
                id="blogPosts"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
                type="text"
              />
            </div>
          </div>
          {blogPosts &&
            blogPosts.map((post) => <PostListItem type="blog" key={post.slug} data={post} />)}
        </div>
      </OGContainer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("post");

  return { props: { posts } };
}
