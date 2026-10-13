import { Head, Html, Main, NextScript } from "next/document";

// Only here to set the page language: Next's default document omits it, which
// screen readers and Lighthouse's html-has-lang check both rely on.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
