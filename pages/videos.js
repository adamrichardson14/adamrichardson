import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import OGContainer from "../components/OGContainer";
import Wrapper from "../components/Wrapper";
import YoutubeStats from "../components/YoutubeStats";

export default function Code({ stats, videos }) {
  const [searchValue, setSearchValue] = useState("");
  const sortedVids = videos
    .sort(
      (a, b) => Number(new Date(b.snippet.publishedAt)) - Number(new Date(a.snippet.publishedAt)),
    )
    .filter((vid) => vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Wrapper>
      <OGContainer description="Adam Richardson Youtube Vidoes. Statistics and Search.">
        <div>
          <div className="text-gray-300 text-lg">
            <h1>
              Videos: Here you can easily find and search all of the videos on my Youtube Channel.
            </h1>
          </div>

          <YoutubeStats stats={stats} />
          <div className="my-4">
            <label className="text-gray-300 text-sm" htmlFor="videoSearch">
              Search Youtube Videos
            </label>
            <div>
              <input
                style={{ caretColor: "white" }}
                id="videoSearch"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
                type="text"
              />
            </div>
          </div>
          {sortedVids &&
            sortedVids.map((video) => (
              <div key={video.id.videoId} className="grid grid-cols-3 items-center py-4 gap-4">
                <div className="hidden sm:col-span-1 sm:flex sm:relative">
                  <Image
                    src={video.snippet.thumbnails.medium.url}
                    width={320}
                    height={180}
                    className="absolute rounded-md opacity-50"
                  />
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <a href={`https://youtube.com/watch?v=${video.id.videoId}`} target="none">
                    <h3 className="text-gray-100 text-xl">{video.snippet.title}</h3>
                    <p className="text-gray-400">{video.snippet.description}</p>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </OGContainer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const res = await axios(`${process.env.NEXT_PUBLIC_URL}/api/youtube`);
  const youtubeData = await res.data;
  return {
    revalidate: 86400,
    props: {
      stats: youtubeData.stats.items[0].statistics,
      videos: youtubeData.uploads.items,
    },
  };
}