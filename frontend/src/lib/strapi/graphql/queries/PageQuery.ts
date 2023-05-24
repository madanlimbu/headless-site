// import { gql } from "@apollo/client";
import { gql } from "@apollo/client";
import Page from "../fragments/PageFragment";

const queryPages = gql`
  ${Page}
  query Pages(
    $filters: PostFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    page(filters: $filters, sort: $sort, pagination: $pagination) {
      data {
        id
        attributes {
          ...Post
        }
      }
    }
  }
`;

export default queryPages;
