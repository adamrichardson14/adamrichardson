import Link from "next/link";
import React from "react";

export default function PostListItem({ data, type }) {
  return (
    <div className="py-4 border-b-2 border-gray-800">
      <div>
        <Link href={`/${type}/${data.slug}`}>
          <a>
            <h2 className="text-white hover:text-cyan-300 text-3xl transition-colors duration-200">
              {data.title}
            </h2>
          </a>
        </Link>
        <p className="text-gray-200">{data.description}</p>
        <p className="text-sm text-gray-400">{new Date(data.published).toDateString()}</p>
      </div>
    </div>
  );
}
