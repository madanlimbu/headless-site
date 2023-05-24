import Posts from "@/components/Posts/Posts";
import { getBlogPostsListing } from "@/lib/strapi/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";

function IndexPage({
  postsCollection,
}: {
  postsCollection: PostEntityResponseCollection;
}) {
  return <Posts postsCollection={postsCollection} />;
}

export async function getServerSideProps() {
  const data = await getBlogPostsListing();
  return {
    props: {
      postsCollection: data.posts,
    },
  };
}

export default IndexPage;
