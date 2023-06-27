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
  // const public_domain = process.env.PUBLIC_DOMAIN;
  // const site_name = process.env.SITE_NAME;
  const public_domain = "www.madanlimbu.com";
  const site_name = "Madan";
  return (
    <Head>
      <title>{`${title} | ${site_name}`}</title>
      <meta name="description" content={description}></meta>

      <meta property="og:title" content={`${title} | ${site_name}`} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://${public_domain}/static/default.png`}
      />
    </Head>
  );
}
