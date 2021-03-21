import { format, parseISO } from "date-fns";
import Image from "next/image";

import OGContainer from "./OGContainer";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <OGContainer
      title={`${frontMatter.title} – Adam Richardson`}
      description={frontMatter.description}
      publishedAt={new Date(frontMatter.published).toISOString()}
      image={
        frontMatter.image ? frontMatter.image : "https://adamrichardson.dev/images/defaultImage.png"
      }
      date={new Date(frontMatter.published).toISOString()}
      type="article">
      <article className="flex flex-col justify-center items-start mb-16 w-full mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-gray-100">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4">
          <div className="flex items-center">
            <p className="text-sm text-gray-300">
              {frontMatter.author}
              {" / "}
              {format(parseISO(frontMatter.published), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="text-sm text-gray-400 min-w-32">{frontMatter.readingTime.text}</p>
        </div>
        {frontMatter.image && (
          <div className="mt-4">
            <Image src={frontMatter.image} width={610} height={400} className="object-cover" />
          </div>
        )}

        <div className="prose prose-xl prose-dark max-w-none w-full mt-4">{children}</div>
      </article>
    </OGContainer>
  );
}
