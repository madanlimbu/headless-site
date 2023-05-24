import Posts from "@/components/Posts/Posts";
import { ClientApi, ServerApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";

function Home({
  postsCollection,
}: {
  postsCollection: PostEntityResponseCollection;
}) {
  return <Posts postsCollection={postsCollection} />;
}

export async function getServerSideProps() {
  const data = await ServerApi.getBlogPostsListing();
  return {
    props: {
      postsCollection: data.posts,
    },
  };
}

export default Home;
