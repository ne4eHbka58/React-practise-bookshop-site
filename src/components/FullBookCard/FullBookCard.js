import React, { useState, useEffect } from "react";
import styles from "./FullBookCard.module.css";
import { getBookById, imageContext } from "../../utils/bookUtils";

const FullBookCard = ({ id, onClose }) => {
  const [isActive, setIsActive] = useState(false); // Состояние для активности окна

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
          <div>
            <img
              src={imageContext(`./${book.image}`)}
              className={styles.image}
            />
          </div>
          <div>
            <p>
              <h1>{book.title}</h1>
            </p>
            <p>
              <h3>
                <span>Автор</span> {book.author}
              </h3>
            </p>
            <p>
              <h3>О книге</h3>
            </p>
            <p>{book.description}</p>
            <h4>{book.price}</h4>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBookCard;
