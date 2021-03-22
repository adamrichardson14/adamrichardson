import Link from "next/link";
import React from "react";

export default function PostListItem({ data, type }) {
  return (
    <Link href={`/${type}/${data.slug}`}>
      <a>
        <div className="text-gray-200 py-4 border-b-2 border-gray-800">
          <div>
            <h2 className="text-3xl">{data.title}</h2>
            <p className="text-gray-400">{data.description}</p>
            <p className="text-sm text-gray-400">{new Date(data.published).toDateString()}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
