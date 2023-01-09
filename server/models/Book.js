const { Schema } = require('mongoose');

const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  tradeBool: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: 1, 
    max: 5,
  },
});

module.exports = bookSchema;