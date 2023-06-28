import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5E0MX1F6WZ"
        ></script>
        <Script id="google-tag-manager">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5E0MX1F6WZ');
  `}
        </Script>

        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
