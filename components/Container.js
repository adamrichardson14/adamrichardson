import Head from "next/head";
import { useRouter } from "next/router";

export default function Container(props) {
  // After mounting, we have access to the theme

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Adam Richardson",
    description: `Full Stack Developer, Course creator.`,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://adamrichardson.dev${router.asPath}`} />
        <link rel="canonical" href={`https://adamrichardosn.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Adam Richardson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://adamrichardson.dev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        <link href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`} rel="stylesheet" />
      </Head>

      <main id="skip" className="flex flex-col justify-center">
        {children}
      </main>
    </>
  );
}
