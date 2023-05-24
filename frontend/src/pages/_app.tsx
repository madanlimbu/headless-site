import "../app/globals.css";
import type { AppProps } from "next/app";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/api/apollo-client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PageWrapper>
        <>
          <Component {...pageProps} />
        </>
      </PageWrapper>
    </ApolloProvider>
  );
}
