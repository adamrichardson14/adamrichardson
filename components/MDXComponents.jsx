import Image from "next/image";

const MDXImage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[400px]">
      <Image alt={alt} src={src} layout="fill" className="object-cover object-center" />
    </div>
  );
};

const MDXComponents = {
  MDXImage,
};

export default MDXComponents;
