import Link from "next/link";
import React from "react";

export default function PostListItem({ data, type }) {
  return (
    <div className="py-4 border-b-2 border-gray-800">
      <div>
        <Link href={`/${type}/${data.slug}`}>
          <a>
            <h2 className="title-text">{data.title}</h2>
          </a>
        </Link>
        <p className="description-text">{data.description}</p>
        <p className="text-gray-500 mt-1">{new Date(data.published).toDateString()}</p>
      </div>
    </div>
  );
}
