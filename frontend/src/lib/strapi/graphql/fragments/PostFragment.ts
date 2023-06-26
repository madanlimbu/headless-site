import { gql } from "@apollo/client";

const Post = gql`
  fragment Post on Post {
    title
    excerpt
    slug
    body
    published
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
