import Posts from "@/components/Posts/Posts";
import { ClientApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";
import Head from "next/head";

interface MetadataProps {
  title?: string;
  description?: string;
}
export default function Metadata({ title, description }: MetadataProps) {
  // Todo: might think about adding a specific image field hero image ?
  // Todo: might think about adding json-ld https://nextjs.org/learn/seo/rendering-and-ranking/metadata, https://schema.org/docs/schemas.html
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.madanlimbu.com/static/default.png"
      />
    </Head>
  );
}
