import { gql } from "@apollo/client";

const Page = gql`
  fragment Page on Page {
    title
    excerpt
    slug
    body
    publishedAt
    createdAt
  }
`;

export default Page;
