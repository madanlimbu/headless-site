import { gql } from "@apollo/client";

export const TagProperty = gql`
  fragment TagProperty on Tag {
    name
    slug
  }
`;

export const Tags = gql`
  ${TagProperty}
  fragment Tags on Tag {
    tags {
      data {
        id
        attributes {
          ...TagProperty
          tags {
            data {
              id
              attributes {
                ...TagProperty
                tags {
                  data {
                    id
                    attributes {
                      ...TagProperty
                      tags {
                        data {
                          id
                          attributes {
                            ...TagProperty
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Tag = gql`
  ${TagProperty}
  ${Tags}
  fragment Tag on Tag {
    ...TagProperty
    ...Tags
  }
`;
