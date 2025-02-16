import React from "react";
import styles from "./BookList.module.css";
import BookCard from "../BookCard/BookCard";
import { useEffect, useRef, useCallback } from "react";

const BookList = ({ books }) => {
  // Анимация
  const bookCardRefs = useRef([]); // Массив ссылок для карточек книг

  const setBookCardRef = useCallback((el) => {
    if (el) {
      bookCardRefs.current.push(el);
    }
  }, []); // Добавляет элемент в массив

  useEffect(() => {
    bookCardRefs.current.forEach((card, index) => {
      setTimeout(function () {
        if (card) {
          card.classList.add(styles.show);
        }
      }, (index + 1) * 200);
    }); // Перебирает все элементы массива и добавляет класс show каждые 200мс
  }, []);

  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
          description={book.description}
          price={book.price}
          ref={setBookCardRef} // Ссылка
        />
      ))}
    </div>
  );
};

export default BookList;
