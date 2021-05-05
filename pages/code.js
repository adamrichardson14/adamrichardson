import { useState } from "react";

import GradientHeadingText from "../components/GradientHeadingText";
import OGContainer from "../components/OGContainer";
import PostListItem from "../components/PostListItem";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Code({ snippets }) {
  const [searchValue, setSearchValue] = useState("");
  const codeSnippets = snippets
    .sort((a, b) => Number(new Date(b.published)) - Number(new Date(a.published)))
    .filter((snippet) => snippet.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Wrapper>
      <OGContainer>
        <div>
          <div>
            <h1 className="body-text">
              Code Snippets: A place where I will drop my most frequently used code snippets for
              easy access. Feel free to use any of the snippets in your own projects.
            </h1>
          </div>
          <div className="my-4 pt-8 pb-3">
            <label htmlFor="codeSnippets">
              <GradientHeadingText text="Search code snippets" />
            </label>
            <div>
              <input
                style={{ caretColor: "white" }}
                id="codeSnippets"
                placeholder="Youtube..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-3 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
                type="text"
              />
            </div>
          </div>
          {codeSnippets &&
            codeSnippets.map((snippet) => (
              <PostListItem type="code" key={snippet.slug} data={snippet} />
            ))}
        </div>
      </OGContainer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter("code");

  return { props: { snippets } };
}
