import React, { useState, useEffect } from "react";
import styles from "./FullBookCard.module.css";
import {
  getCartFromLocalStorage,
  getItemIndexInCart,
  addToCart,
} from "../../utils/cartUtils";
import { getBookById, imageContext } from "../../utils/bookUtils";

const FullBookCard = ({ id, onClose }) => {
  const [isActive, setIsActive] = useState(false); // Состояние для активности окна
  const [isAdded, setIsAdded] = useState(
    getItemIndexInCart(getCartFromLocalStorage(), id) === -1 ? false : true
  ); // Состояние для проверки наличия товара в корзине

  useEffect(() => {
    // При монтировании показываем окно
    setIsActive(true);
    return () => {
      setIsActive(false);
    };
  }, [id]); // Зависимость: id

  const handleClose = () => {
    setIsActive(false); // Устанавливаем isActive в false (запускаем анимацию скрытия)
    setTimeout(onClose, 300); //  Вызываем onClose после окончания анимации
  };

  const handleAddToCart = () => {
    addToCart(book.id, 1); // Добавляем книгу в корзину пользователя
    console.log(getCartFromLocalStorage()); // для отладки
    setIsAdded(true); // Изменяем состояние наличия товара в корзине
  };

  const book = getBookById(id);
  return (
    <div
      className={`${styles.overlayContainer} ${isActive ? styles.active : ""}`}
    >
      <div
        className={`${styles.fullBookCard} ${isActive ? styles.active : ""}`}
      >
        <button onClick={handleClose} className={styles.closeBtn}>
          ×
        </button>
        <div className={styles.row}>
          <div className={styles.imageBlock}>
            <img
              src={imageContext(`./${book.image}`)}
              className={styles.image}
            />
          </div>
          <div>
            <h1 className={styles.bookName}>{book.title}</h1>
            <h3 className={styles.h}>
              <span className={styles.opacityText}>Автор</span> {book.author}
            </h3>
            <h3 className={styles.h}>О книге</h3>
            <p className={styles.text}>{book.description}</p>
            <h3 className={styles.buy}>
              <span className={styles.opacityText}>Цена: </span>
              {book.price} р{" "}
              <button
                className={`${styles.buyBtn} ${
                  isAdded === false ? styles.purchaseBtn : ""
                }`}
                onClick={isAdded === false ? handleAddToCart : null}
              >
                {isAdded === false ? "Добавить в корзину" : "Есть в корзине"}
              </button>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBookCard;
