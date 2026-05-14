import Head from "next/head";
import { absoluteUrl, DEFAULT_DESCRIPTION, DEFAULT_SOCIAL_IMAGE, SITE_NAME } from "@/lib/seo";

const author = "Rico Trebeljahr";

interface HeaderProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}

export default function Header({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = `${title} preview`,
}: HeaderProps) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="art showcase r3f react react-three drei three-js react-three-fiber 3D 3d-models quaternius"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:description" content={description} />

      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" color="#000000" href="/icons/safari-pinned-tab.svg" />
      <link rel="apple-touch-startup-image" href="/startup.png" />

      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0" />
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@trebeljahr" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  );
}
