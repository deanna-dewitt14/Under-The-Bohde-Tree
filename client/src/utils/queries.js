//queryMe gql
import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        tradeBool
      }
      wishList {
        bookId
        authors
        description
        title
        image
        tradeBool
      }
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        tradeBool
      }
      wishList {
        bookId
        authors
        description
        title
        image
        tradeBool
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        tradeBool
      }
      wishList {
        bookId
        authors
        description
        title
        image
        tradeBool
      }
    }
  }
`;
