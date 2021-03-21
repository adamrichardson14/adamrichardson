import { useState } from "react";

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
          <div className="text-gray-300 text-lg">
            <h1>
              Code Snippets: A place where I will drop my most frequently used code snippets for
              easy access.
            </h1>
          </div>
          <div className="mt-8 mb-2">
            <label className="text-gray-300 text-sm" htmlFor="searchCode">
              Search Code Snippets
            </label>
            <div>
              <input
                style={{ caretColor: "white" }}
                id="codeSnippets"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
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
