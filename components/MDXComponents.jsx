import Image from "next/image";
import Link from "next/link";

import InformationBlob from "./InformationBlob";

const MDXLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="hover:text-cyan-300">{text}</a>
    </Link>
  );
};

const MDXImage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[400px]">
      <Image alt={alt} src={src} layout="fill" className="object-cover object-center" />
    </div>
  );
};

const MDXComponents = {
  MDXImage,
  InformationBlob,
  MDXLink,
};

export default MDXComponents;
