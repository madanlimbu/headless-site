import Posts from "@/components/Posts/Posts";
import { ClientApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";

function IndexPage({
  postsCollection,
}: {
  postsCollection: PostEntityResponseCollection;
}) {
  return <Posts postsCollection={postsCollection} />;
}

export async function getServerSideProps() {
  const data = await ClientApi.getBlogPostsListing();
  return {
    props: {
      postsCollection: data.posts,
    },
  };
}

export default IndexPage;
