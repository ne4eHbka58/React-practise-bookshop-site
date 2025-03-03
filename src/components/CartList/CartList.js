import React, { useState } from "react";
import styles from "./CartList.module.css";
import CartProduct from "../CartProduct/CartProduct";
import FullBookCard from "../FullBookCard/FullBookCard";
import {
  getCartFromLocalStorage,
  addToCart,
  removeFromCart,
} from "../../utils/cartUtils";
import { getBookById } from "../../utils/bookUtils";
import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const CartList = () => {
  const [cartItems, setCartItems] = useState(
    () => getCartFromLocalStorage().items
  ); //  Используем состояние для хранения cartItems
  const [isAnimationActive, setIsAnimationActive] = useState(false); // Состояние для анимации появления текста, если корзина пуста
  const [selectedBookId, setSelectedBookId] = useState(null); // Состояния для id выбранной книги
  const [totalPrice, setTotalPrice] = useState(0);
  const handleCardClick = (bookId) => {
    setSelectedBookId(bookId); // Обновляем состояние при клике
  };

  const handleCloseFullBookCard = () => {
    setSelectedBookId(null); // Сбрасываем состояние при закрытии
  };

  // Анимация появления карточек товаров
  const bookCardRefs = useRef([]); // Массив ссылок для карточек книг. Нужен для анимации

  const setBookCardRef = useCallback((el) => {
    if (el) {
      bookCardRefs.current.push(el);
    }
  }, []); // Добавляет элемент в массив

  useEffect(() => {
    // Перебирает все элементы массива и добавляет класс show каждые 200мс
    bookCardRefs.current.forEach((card, index) => {
      setTimeout(function () {
        if (card) {
          card.classList.add(styles.active);
        }
      }, (index + 1) * 200);
    });
  }, []);

  useEffect(() => {
    // Получаем данные из localstorage при рендеринге страницы
    localStorage.setItem("cart", JSON.stringify({ items: cartItems }));
  }, [cartItems]);

  useEffect(() => {
    // Активируем анимацию при рендере блока "Корзина пуста"
    if (cartItems.length === 0) {
      setIsAnimationActive(true);
    } else {
      setIsAnimationActive(false);
    }
  }, [cartItems]); // Зависимость от cartItems

  const handleAddToCart = useCallback(
    (bookId) => {
      addToCart(bookId);
      setCartItems(getCartFromLocalStorage().items);
    },
    [setCartItems]
  );

  const handleRemoveFromCart = useCallback(
    (bookId) => {
      removeFromCart(bookId);
      setCartItems(getCartFromLocalStorage().items);
    },
    [setCartItems]
  );

  //  Функция для расчета общей стоимости
  const calculateTotalPrice = useCallback(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const book = getBookById(item.bookId);
      if (book) {
        total += book.price * item.quantity;
      }
    });
    setTotalPrice(total);
  }, [cartItems]);

  // Вызываем calculateTotalPrice при каждом изменении cartItems
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems, calculateTotalPrice]);

  return (
    <div className={styles.cartList}>
      {cartItems.length === 0 ? (
        <div
          className={`${styles.empty} ${
            isAnimationActive ? styles.active : ""
          }`}
        >
          <p className={styles.emptyText}>Ой.. Ваша корзина пуста</p>
          <p className={`${styles.emptySmallText} ${styles.emptyText}`}>
            Давайте
            <Link to="/" className={styles.link}>
              заполним
            </Link>
            её
          </p>
        </div>
      ) : (
        <>
          <h1 className={styles.yourCart}>Ваша корзина</h1>
          {cartItems.map((bookInfo) => {
            const book = getBookById(bookInfo.bookId);
            return (
              <CartProduct
                key={bookInfo.bookId}
                bookId={bookInfo.bookId}
                image={book.image}
                title={book.title}
                author={book.author}
                quantity={bookInfo.quantity}
                price={book.price}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                ref={setBookCardRef} // Ссылка
                onImageClick={() => handleCardClick(bookInfo.bookId)} // Обработчик при нажатии
              />
            );
          })}
          <h2 className={styles.totalPrice}>
            Стоимость заказа: {totalPrice} р
          </h2>
          <Link to="/thanks">
            <button className={styles.buyButton}>Оформить заказ</button>
          </Link>
        </>
      )}
      {selectedBookId && ( // Условный рендеринг FullBookCard
        <FullBookCard id={selectedBookId} onClose={handleCloseFullBookCard} />
      )}
    </div>
  );
};

export default CartList;
