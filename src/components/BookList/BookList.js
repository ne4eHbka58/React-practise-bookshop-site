import React, { useState } from "react";
import styles from "./BookList.module.css";
import BookCard from "../BookCard/BookCard";
import FullBookCard from "../FullBookCard/FullBookCard";
import { useEffect, useRef, useCallback } from "react";

const BookList = ({ books }) => {
  const [selectedBookId, setSelectedBookId] = useState(null); // Состояния для id выбранной книги

  const handleCardClick = (bookId) => {
    setSelectedBookId(bookId); // Обновляем состояние при клике
  };

  const handleCloseFullBookCard = () => {
    setSelectedBookId(null); // Сбрасываем состояние при закрытии
  };

  // Анимация появления карточек
  const bookCardRefs = useRef([]); // Массив ссылок для карточек книг. Нужен для анимации

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
          onClick={() => handleCardClick(book.id)} // Обработчик при нажатии
        />
      ))}

      {selectedBookId && ( // Условный рендеринг FullBookCard
        <FullBookCard id={selectedBookId} onClose={handleCloseFullBookCard} />
      )}
    </div>
  );
};

export default BookList;
