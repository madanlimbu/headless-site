import Metadata from "@/components/Metadata/Metadata";
import Posts from "@/components/Posts/Posts";
import { ClientApi } from "@/lib/api/api";
import { PostEntityResponseCollection } from "@/lib/strapi/interface/__generated__/graphql";

function Home({
  postsCollection,
}: {
  postsCollection: PostEntityResponseCollection;
}) {
  return (
    <>
      <Metadata
        {...{
          title: "Madan Limbu | Madan",
          description:
            "A website containing collection of a personal adventure.",
        }}
      />
      <Posts postsCollection={postsCollection} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await ClientApi.getBlogPostsListing();
  return {
    props: {
      postsCollection: data.posts,
    },
  };
}

export default Home;
