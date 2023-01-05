import React, { useState } from "react";
import './Book.css';
// import Auth from "../utils/auth";

export default function Book({ book, rating, setRating }) {
  const handleRating = (rate) => {
    setRating(rate);
    console.log(book)
  };
  const addToLibrary = (id) => {
    console.log(id, 'Library')
  }
  const addToWishlist = (id) => {
    console.log(id, 'Wishlist')
  }
  return (
    <div className="book">
      <img alt={`${book.title} cover`} src={book.image} />
      <div className="book__content">
        <div className="book__info">
          <h2>
            <a href={book.link} target="_blank" rel="noreferrer noopener">
             {book.title}
            </a>
          </h2>
          <h3>{book.authors.length > 1 ? 'Authors:' : 'Author:'}{book.authors.map(author => {return <div>{author}</div>})}</h3>
        </div>
        <div className="btns">
          <button onClick={() => addToLibrary(book.bookId)}>add to Library</button>
          <button onClick={() => addToWishlist(book.bookId)}>add to Wishlist</button>
             {/* {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )
                        ? "This book has already been saved!"
                        : "Save this Book!"}
                    </Button> 
                      )} */}
        </div>
      </div>
    </div>
  );
}
