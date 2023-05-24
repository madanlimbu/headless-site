import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: `${process.env.STRAPI_URL}/graphql`,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
