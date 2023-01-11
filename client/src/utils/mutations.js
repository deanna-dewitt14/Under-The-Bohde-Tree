import { gql } from "@apollo/client";

// login user
export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
      _id
      username
      email
      savedBooks {
        # _id
        bookId
        authors
        description
        title
        image
        tradeBool
        rating
      }
    }
  }
`;
export const SAVE_WISHLIST = gql`
  mutation addWish($input: savedBook!) {
    addWish(input: $input) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;
export const REMOVE_WISH = gql`
  mutation removeWish($bookId: String!) {
    removeWish(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;
export const TOGGLE_TRADE = gql`
  mutation toggleTradeBool($bookId: String!) {
    toggleTradeBool(bookId: $bookId) {
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
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;

