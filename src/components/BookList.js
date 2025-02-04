import React from "react";
import styles from "./styles";
import BookCard from "./BookCard";
import { useEffect, useRef, useCallback } from "react";

const BookList = ({ books }) => {
  // Анимация
  const bookCardRefs = useRef([]);

  const setBookCardRef = useCallback((el) => {
    if (el) {
      bookCardRefs.current.push(el);
    }
  }, []); // Добавляет элемент в массив

  useEffect(() => {
    bookCardRefs.current.forEach((card, index) => {
      setTimeout(function () {
        if (card) {
          card.classList.add("show");
        }
      }, (index + 1) * 200);
    }); // Перебирает все элементы массива и добавляет класс show каждые 200мс
  }, []);

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
          ref={setBookCardRef} //ссылка
        />
      ))}
    </div>
  );
};

export default BookList;
