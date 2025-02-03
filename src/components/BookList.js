import React from "react";
import styles from "./styles";
import BookCard from "./BookCard";

const bookList = ({ books }) => {
  return (
    <div className="BookList" style={styles.bookList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
          description={book.description}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default bookList;
