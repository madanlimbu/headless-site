import { getBlogPostsListing, getSinglePostBySlug } from "../strapi/api";
import {
  Query,
  QueryPostsArgs,
} from "../strapi/interface/__generated__/graphql";

interface PublicApiArgs {
  fn: string;
  args?: any;
}

export interface Api {
  getBlogPostsListing: (args?: QueryPostsArgs) => Promise<Query>;
  getSinglePostBySlug: (args: { slug: string }) => Promise<Query>;
}

export function publicApi(args?: PublicApiArgs) {
  return fetch(
    `${process.env.SITE_URL ? process.env.SITE_URL : ""}/api/public`,
    {
      method: "POST",
      body: JSON.stringify(args),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // signal: args && args.signal ? args.signal : undefined,
    }
  ).then((r) => r.json());
}

export const ClientApi: Api = {
  getBlogPostsListing: (args) => {
    return publicApi({
      fn: "getBlogPostsListing",
      args: args,
    });
  },
  getSinglePostBySlug: (args) => {
    return publicApi({
      fn: "getSinglePostBySlug",
      args: args,
    });
  },
};

export const ServerApi: Api = {
  getBlogPostsListing: async function (args) {
    return await getBlogPostsListing(args);
  },
  getSinglePostBySlug: async function (args) {
    return await getSinglePostBySlug(args);
  },
};
