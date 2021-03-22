/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import OGContainer from "../components/OGContainer";
import PostListItem from "../components/PostListItem";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { fetchData } from "../lib/utlis";

export default function Home({ posts, snippets, videos }) {
  return (
    <Wrapper>
      <OGContainer
        description="Adam Richardson - Fullstack website developer and course
      creator from the UK">
        <header>
          <div className="grid grid-cols-5">
            <div className="col-span-5 sm:col-span-4 flex items-center">
              <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
                Hi, I'm Adam Richardson.{" "}
                <span className="inline-block" role="img" aria-label="Hand Wave Emoji">
                  ✋
                </span>
              </h1>
            </div>
            <div className="col-span-5 sm:col-span-1 h-40 w-40 sm:h-full mt-8 sm:mt-0 sm:w-full pr-4 flex items-center pt-3">
              <Image
                src={"/images/me.png"}
                alt="Photo of Adam Richardson"
                width={320}
                height={320}
                className="rounded-full"
              />
            </div>
          </div>
          <p className="text-2xl font-medium text-gray-300 mt-8 leading-10">
            I'm a fullstack developer and course creator, passionate about teaching real world
            coding skills to aspiring developers. I run a website design agency and use the projects
            that we are creating as a platform to learn and teach.
          </p>
          <blockquote className="border-l-4 border-gray-500 pl-4 text-2xl font-medium text-gray-400 mt-4 leading-10 font-mono">
            This website is a hub for my ramblings, educational posts and Youtube content.
          </blockquote>
        </header>
        <main>
          <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl mt-24 underline">
            Recent Blog Posts
          </h2>
          {posts && posts.map((post) => <PostListItem type="blog" key={post.slug} data={post} />)}
          {videos && (
            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl mt-24 underline">
              Recent Youtube Videos
            </h2>
          )}

          {videos &&
            videos.map((video) => (
              <div key={video.id.videoId} className="grid grid-cols-3 items-center py-4 gap-4">
                <div className="hidden sm:col-span-1 sm:flex sm:relative">
                  <Image
                    src={video.snippet.thumbnails.medium.url}
                    width={320}
                    height={180}
                    alt={video.snippet.title}
                    className="absolute rounded-md opacity-50"
                  />
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <a href={`https://youtube.com/watch?v=${video.id.videoId}`} target="none">
                    <h2 className="text-gray-100 text-xl">{video.snippet.title}</h2>
                    <p className="text-gray-400">{video.snippet.description}</p>
                  </a>
                </div>
              </div>
            ))}
          <div className="mt-24 mb-16">
            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl underline">
              Recent Code Snippets
            </h2>
            {snippets &&
              snippets.map((snippet) => (
                <PostListItem type="code" key={snippet.slug} data={snippet} />
              ))}
          </div>
        </main>
      </OGContainer>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;

  const snippets = await getAllFilesFrontMatter("code");
  const posts = await getAllFilesFrontMatter("post");
  const orderedSnippets = snippets
    .sort((a, b) => Number(new Date(b.published)) - Number(new Date(a.published)))
    .slice(0, 3);
  const orderedPosts = posts
    .sort((a, b) => Number(new Date(b.published)) - Number(new Date(a.published)))
    .slice(0, 3);
  const uploadData = await fetchData(uploadsURL);
  const orderedVideos = uploadData
    ? uploadData.items
        .sort(
          (a, b) =>
            Number(new Date(b.snippet.publishedAt)) - Number(new Date(a.snippet.publishedAt)),
        )
        .slice(0, 3)
    : null;

  return {
    props: {
      snippets: orderedSnippets,
      posts: orderedPosts,
      videos: orderedVideos,
    },
  };
};
