import Head from "next/head";
import { useRouter } from "next/router";

export default function OGContainer(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Adam Richardson | Fullstack Developer & Course Creator",
    description: `Full Stack Developer, Course creator.`,
    type: "website",
    image: "https://adamrichardson.dev/images/defaultImage.png",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://adamrichardson.dev${router.asPath}`} />
        <link rel="canonical" href={`https://adamrichardson.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Adam Richardson | Full Stack Developer & Course Creator"
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://adamrichardson.dev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <main id="skip" className="flex flex-col justify-center">
        {children}
      </main>
    </>
  );
}
