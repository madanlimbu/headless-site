import client from "@/lib/api/apollo-client";
import queryPosts from "../graphql/queries/PostsListingQuery";
import { Query, QueryPostsArgs } from "../interface/__generated__/graphql";

export const getPostsCollection = async (args: QueryPostsArgs) => {
  const { data } = await client.query<Query, QueryPostsArgs>({
    variables: {
      filters: args.filters,
      pagination: args.pagination,
      sort: args.sort,
    },
    query: queryPosts,
  });
  return data;
};

export const getBlogPostsListing = async (args?: QueryPostsArgs) => {
  const { data } = await client.query<Query, QueryPostsArgs>({
    variables: {
      filters: {
        type: {
          eq: "blog",
        },
      },
      pagination: {
        start: 0,
        limit: 1,
        ...args?.pagination,
      },
      sort: args?.sort ? args.sort : ["publishedAt:DESC"],
    },
    query: queryPosts,
  });
  return data;
};

export const getSinglePostBySlug = async ({ slug }: { slug: string }) => {
  const { data } = await client.query<Query, QueryPostsArgs>({
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
      pagination: {
        limit: 1,
      },
    },
    query: queryPosts,
  });
  return data;
};