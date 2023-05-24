import { gql } from "@apollo/client";

const Post = gql`
  fragment Post on Post {
    title
    excerpt
    slug
    body
    publishedAt
    createdAt
    tags {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default Post;
