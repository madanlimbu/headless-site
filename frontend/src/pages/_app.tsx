import "../app/globals.css";
import type { AppProps } from "next/app";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5E0MX1F6WZ" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-5E0MX1F6WZ');
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
