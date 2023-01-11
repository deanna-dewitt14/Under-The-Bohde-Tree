const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    getUserTrade(bookId: String!): [User]
    getUserWish(bookId: String!): [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(id: ID!, email: String!): User
    deleteUser(id: ID!): Boolean
    saveBook(input: savedBook!): User
    removeBook(bookId: String!): User
    toggleTradeBool(bookId: String!): User
    setRating(bookId: String!, rating: Int): User
    addWish(input: savedBook!): User
    removeWish(bookId: String!): User
  }
  type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
    wishList: [Book]
    friendCount: Int
    comments: [Comment]
    friends: [User]
  }
  type Book {
    _id: ID!
    bookId: String!
    title: String
    authors: [String]
    description: String
    image: String
    link: String
    tradeBool: Boolean
    rating: Int
  }
  input savedBook {
    bookId: String!
    title: String
    authors: [String]
    description: String
    image: String
  }

  type Comment {
    _id: ID
    commentText: String
    username: String
    createdAt: String
    book_id: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;
