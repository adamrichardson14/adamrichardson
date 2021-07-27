import Wrapper from "../components/Wrapper";
import { getImages } from "../lib/apiData";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

const getImageBlurHashes = async (images) => {
  const hashedImages = await Promise.all(
    images.map(async (image) => {
      const { base64, img } = await getPlaiceholder(image.image.url, { size: 10 });
      return {
        ...img,
        base64,
        title: image.title,
        id: image.image.id,
      };
    }),
  );

  return hashedImages;
};

export const getStaticProps = async () => {
  const imageResponse = await getImages();
  const images = imageResponse.imageGalleries;

  const blurHasHImages = await getImageBlurHashes(images);

  return {
    props: {
      images,
      blurHasHImages: blurHasHImages.reverse()
    },
  };
};

export default function Gallery({ blurHasHImages }) {
  console.log(blurHasHImages);
  return (
    <Wrapper>
      <div className="grid grid-cols-3 gap-3">
        {blurHasHImages.map((image) => (
          <div key={image.id} className="h-[300px] relative">
            <Image
              src={image.src}

              placeholder="blur"
              className="absolute"
              layout="fill"
              objectFit="cover"
              blurDataURL={image.base64}
              alt={image.title}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
