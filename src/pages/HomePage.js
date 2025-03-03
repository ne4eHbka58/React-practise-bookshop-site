import React from "react";
import BookList from "../components/BookList/BookList";
import booksData from "../assets/data/books.json";

const HomePage = () => {
  return (
    <div>
      <BookList books={booksData} />
    </div>
  );
};

export default HomePage;
