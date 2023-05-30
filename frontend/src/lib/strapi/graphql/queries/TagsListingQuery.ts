// import { gql } from "@apollo/client";
import { gql } from "@apollo/client";
import Post from "../fragments/PostFragment";

const queryPosts = gql`
  query Posts(
    $filters: PostFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    posts(filters: $filters, sort: $sort, pagination: $pagination) {
      data {
        id
        attributes {
          ...Post
        }
      }
      meta {
        pagination {
          total
          pageCount
          pageSize
          page
        }
      }
    }
  }
`;

export default queryPosts;
