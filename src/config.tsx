import Head from "next/head";
import type { Ids } from "@/components/PackViewerProvider";
import { getPackLicense } from "@/lib/licenses";
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION,
  DEFAULT_SOCIAL_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const author = "Rico Trebeljahr";

interface HeaderProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  packId?: Ids;
}

// Pack pages describe the viewer page and the upstream pack it shows, so the
// models stay credited to Quaternius under their own licence.
function packSchema(packId: Ids, title: string, description: string, url: string) {
  const pack = getPackLicense(packId);
  const website = `${SITE_URL}/#website`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": website,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description: DEFAULT_DESCRIPTION,
        author: { "@type": "Person", name: author, url: "https://ricos.site" },
        inLanguage: "en",
      },
      {
        "@type": "CollectionPage",
        name: title,
        url,
        description,
        isPartOf: { "@id": website },
        about: {
          "@type": "CreativeWork",
          name: pack.packName,
          url: pack.source,
          creator: { "@type": "Person", name: "Quaternius", url: "https://quaternius.com/" },
          license: pack.url,
        },
      },
    ],
  };
}

export default function Header({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = `${title} preview`,
  packId,
}: HeaderProps) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const schema = packId ? packSchema(packId, title, description, canonicalUrl) : null;

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
      {schema && (
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inline; "<" is escaped.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      )}

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

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" color="#000000" href="/icons/safari-pinned-tab.svg" />

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
