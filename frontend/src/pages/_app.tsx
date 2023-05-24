import "../app/globals.css";
import type { AppProps } from "next/app";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <>
        <Component {...pageProps} />
      </>
    </PageWrapper>
  );
}
