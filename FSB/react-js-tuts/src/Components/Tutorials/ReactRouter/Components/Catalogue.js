import React, { useState, useEffect } from "react";
import Book from "./Book";
import { getTitles } from "../booksService";

const Catalog = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getTitles().then(data => setBooks(data));
  }, []);
  return (
    <div className="catalog">
      {books &&
        books.map(book => (
          <Book key={book.isbn} thumb={book.thumb} title={book.title} />
        ))}
    </div>
  );
};

export default Catalog;
