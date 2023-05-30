import Posts from "@/components/Posts/Posts";
import { ClientApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";
import Head from "next/head";

interface MetadataProps {
  title?: string;
  description?: string;
}
export default function Metadata({ title, description }: MetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
