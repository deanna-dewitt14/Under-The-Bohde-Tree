const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
    toggleTradeBool(bookId: ID!): User
    setRating(bookId: ID!, rating: Int): User
  }

  type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
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
    description: String
    title: String
    image: String
  }
  type Comment {
    _id: ID
    commentText: String
    username: String
    createdAt: String
    book_id: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(id: ID!, email: String!): User
    deleteUser(id: ID!): Boolean
    addComment(commentText: String!, book_id: String!): Comment
    addFriend(friendId: ID!): User
    saveBook(input: BookInput!): User
    removeBook(bookId: String!): User
  }
`;
module.exports = typeDefs;
