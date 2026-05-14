import Head from "next/head";

const titleDefault = "3D Models by @Quaternius";
const siteUrl = "https://quaternius.trebeljahr.com";
const descriptionDefault = "A showcase of free 3D models by @Quaternius. With Animations!";
const author = "Rico Trebeljahr";

interface HeaderProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export default function Header({
  title = titleDefault,
  description = descriptionDefault,
  path = "/",
  image = "/icons/share.png",
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
      <meta property="og:site_name" content={titleDefault} />
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

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@trebeljahr" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
