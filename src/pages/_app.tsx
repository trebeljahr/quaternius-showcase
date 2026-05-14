import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { type ReactNode, useRef } from "react";
import Layout from "@/components/dom/Layout";
import Header from "@/config";
import "@/styles/index.css";
import Script from "next/script";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: true });
const plausibleDomain = "quaternius.trebeljahr.com";
const plausibleScriptUrl =
  "https://plausible.trebeljahr.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";

interface PageProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  [key: string]: unknown;
}

type CanvasPage = AppProps<PageProps>["Component"] & {
  canvas?: (props: PageProps) => ReactNode;
};

interface ShowcaseAppProps extends AppProps<PageProps> {
  Component: CanvasPage;
}

export default function App({ Component, pageProps }: ShowcaseAppProps) {
  const ref = useRef();
  return (
    <>
      <Script id="plausible-loader" strategy="afterInteractive">
        {`
            (function () {
              var domain = ${JSON.stringify(plausibleDomain)};
              if (location.hostname !== domain) return;
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments);
              };
              var script = document.createElement("script");
              script.defer = true;
              script.dataset.domain = domain;
              script.src = ${JSON.stringify(plausibleScriptUrl)};
              document.head.appendChild(script);
            })();
          `}
      </Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FZYX7YZ8V7" />
      <Script id="gtaginit">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FZYX7YZ8V7');
       `}
      </Script>
      <Header
        title={pageProps.title}
        description={pageProps.description}
        path={pageProps.path}
        image={pageProps.image}
        imageAlt={pageProps.imageAlt}
      />
      <Component {...pageProps} />

      <Layout ref={ref}>
        {Component?.canvas && (
          <Scene className="pointer-events-none" eventSource={ref} eventPrefix="client">
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  );
}
