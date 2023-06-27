import { ClientApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";
import { GetServerSideProps } from "next/types";
import Metadata from "@/components/Metadata/Metadata";
import Content from "@/components/Content/Content";

function BasicPage({ data }: { data?: PostEntityResponseCollection }) {
  const post = data?.data?.[0]?.attributes;
  const body = post?.body;
  return (
    <>
      <Metadata
        {...{
          title: post?.title,
          description: post?.excerpt ? post?.excerpt : "",
        }}
      />

      <div>
        {post?.body || post?.markdown ? (
          <Content {...{ body: post?.body, markdown: post?.markdown }} />
        ) : (
          "Page not found."
        )}
      </div>
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
