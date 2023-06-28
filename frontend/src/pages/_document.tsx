import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
