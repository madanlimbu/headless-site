import RichText from "@/components/RichText/RichText";
import { getSinglePostBySlug } from "@/lib/strapi/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";
import { GetServerSideProps } from "next/types";

function BasicPage({ data }: { data?: PostEntityResponseCollection }) {
  const body = data?.data?.[0]?.attributes?.body;
  return <div>{body ? <RichText text={body} /> : "Page not found."}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.params?.slug?.[0];
  if (slug) {
    const data = await getSinglePostBySlug(slug);
    return {
      props: {
        data: data.posts,
      },
    };
  }
  return {
    props: {
      data: undefined,
    },
  };
};

export default BasicPage;
