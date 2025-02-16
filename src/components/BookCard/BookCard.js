import React, { forwardRef } from "react";
import styles from "./BookCard.module.css";

const imageContext = require.context(
  "../../assets/images",
  false,
  /\.(png|jpg|jpeg|gif)$/
); // Задачёт контекст для изображений, чтобы их можно было получить только по названию

const BookCard = forwardRef(
  ({ image, title, author, description, price }, ref) => {
    return (
      <div className={styles.bookCard} ref={ref}>
        <img
          src={imageContext(`./${image}`)}
          alt="изображение книги"
          className={styles.image}
        />
        <div className={styles.cardText}>
          <h4 className={styles.text}>
            <span className={styles.biggerText}>{title}</span> <br />
            <i>{author}</i>
          </h4>
          <p className={styles.price}>{price} р.</p>
        </div>
      </div>
    );
  }
);

export default BookCard;
