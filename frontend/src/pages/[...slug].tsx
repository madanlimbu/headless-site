import Metadata from "@/components/Metadata/Metadata";
import RichText from "@/components/RichText/RichText";
import { ClientApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";
import { GetServerSideProps } from "next/types";

function BasicPage({ data }: { data?: PostEntityResponseCollection }) {
  const post = data?.data?.[0]?.attributes;
  const body = post?.body;
  return (
    <>
      <Metadata
        {...{
          title: `${post?.title} | Madan`,
          description: post?.excerpt ? post?.excerpt : "",
        }}
      />
      <div>{body ? <RichText text={body} /> : "Page not found."}</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.params?.slug?.[0];
  if (slug) {
    const data = await ClientApi.getSinglePostBySlug({ slug: slug });
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
