import Image from "next/image";

const MDXImage = ({ src }) => {
  return (
    <div className="relative w-full h-[400px]">
      <Image src={src} layout="fill" className="object-cover object-center" />
    </div>
  );
};

const MDXComponents = {
  MDXImage,
};

export default MDXComponents;
