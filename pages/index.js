/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import GradientHeadingText from "../components/GradientHeadingText";
import OGContainer from "../components/OGContainer";
import PostListItem from "../components/PostListItem";
import Socials from "../components/Socials";
import Wrapper from "../components/Wrapper";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { fetchData } from "../lib/utlis";
import me from "../public/images/me.png";

export default function Home({ posts, snippets, videos }) {
  return (
    <Wrapper>
      <OGContainer
        description="Adam Richardson - Fullstack website developer and course
        creator from the UK">
        <header className="">
          <div className="mt-4">
            <div className="flex items-center">
              <h1 className="text-6xl font-extrabold text-white tracking-tight sm:text-8xl">
                Hi, I'm Adam Richardson.
              </h1>
            </div>
            <Socials />
          </div>
          <p className="body-text mt-8 leading-10">
            I'm a fullstack developer and course creator. I'm passionate about teaching real world
            coding skills to aspiring developers. I run a website design agency and use the projects
            that we're working on as inspiration for my courses/videos.
          </p>
          <div className="grid grid-cols-3 border-l-8 border-cyan-300 bg-gray-800 rounded-r-md py-4 mt-8 relative">
            <div className="col-span-3 sm:col-span-2 pl-4 text-2xl font-medium text-gray-400 leading-10 font-mono ">
              The website is my place for blog posts, code snippets and Youtube content.
            </div>
            <div className="absolute right-0 -top-2 hidden sm:flex">
              <Image
                src={me}
                height={170}
                width={170}
                className="rounded-full"
                alt="Adam Richardson portrait"
                placeholder="blur"
              />
            </div>
          </div>
        </header>
        <main>
          <div className="mt-40">
            <GradientHeadingText text="Blog Posts" />
          </div>
          {posts && posts.map((post) => <PostListItem type="blog" key={post.slug} data={post} />)}

          {videos && (
            <div className="mt-40">
              <GradientHeadingText text="Youtube Videos" />
            </div>
          )}

          {videos &&
            videos.map((video) => (
              <>
                <div
                  key={video.id.videoId}
                  className="grid grid-cols-3 items-center py-8 gap-4  border-b-2 border-gray-800">
                  <div className="hidden sm:col-span-1 sm:flex sm:relative">
                    <Image
                      src={video.snippet.thumbnails.medium.url}
                      width={320}
                      height={180}
                      alt={video.snippet.title}
                      className="absolute rounded-md"
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <a href={`https://youtube.com/watch?v=${video.id.videoId}`} target="none">
                      <h2 className="title-text">{video.snippet.title}</h2>
                    </a>
                  </div>
                </div>
                <p className="description-text">{video.snippet.description}</p>
              </>
            ))}
          <div className="mt-24 mb-16">
            <GradientHeadingText text="Code Snippets" />
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
    .slice(0, 5);
  const orderedPosts = posts
    .sort((a, b) => Number(new Date(b.published)) - Number(new Date(a.published)))
    .slice(0, 5)
    .reverse();
  const uploadData = await fetchData(uploadsURL);
  const orderedVideos = uploadData
    ? uploadData.items
        .sort(
          (a, b) =>
            Number(new Date(b.snippet.publishedAt)) - Number(new Date(a.snippet.publishedAt)),
        )
        .slice(0, 5)
    : null;

  return {
    props: {
      snippets: orderedSnippets,
      posts: orderedPosts,
      videos: orderedVideos,
    },
  };
};
