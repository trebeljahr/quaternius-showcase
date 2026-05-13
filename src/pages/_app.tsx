import dynamic from "next/dynamic";
import { useRef } from "react";
import Layout from "@/components/dom/Layout";
import Header from "@/config";
import "@/styles/index.css";
import Script from "next/script";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: true });
const plausibleEnabled = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps = { title: "index" } }) {
  const ref = useRef();
  return (
    <>
      {plausibleEnabled ? (
        <Script id="plausible-loader" strategy="afterInteractive">
          {`
            (function () {
              var domain = "quaternius.trebeljahr.com";
              if (location.hostname !== domain) return;
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments);
              };
              var script = document.createElement("script");
              script.defer = true;
              script.dataset.domain = domain;
              script.src = "https://plausible.trebeljahr.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";
              document.head.appendChild(script);
            })();
          `}
        </Script>
      ) : null}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FZYX7YZ8V7" />
      <Script id="gtaginit">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FZYX7YZ8V7');
       `}
      </Script>
      <Header title={pageProps.title} />
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
