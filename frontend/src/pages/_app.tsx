import "../app/globals.css";
import type { AppProps } from "next/app";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5G6BGWT');
      `}
      </Script>
      <PageWrapper>
        <>
          <Component {...pageProps} />
        </>
      </PageWrapper>
    </>
  );
}
