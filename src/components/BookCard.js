import React, { forwardRef } from "react";
import styles from "./styles";

const imageContext = require.context(
  "../assets/images",
  false,
  /\.(png|jpg|jpeg|gif)$/
); // Задачёт контекст для изображений, чтобы их можно было получить только по названию

const BookCard = forwardRef(
  ({ image, title, author, description, price }, ref) => {
    return (
      <div className="BookCard" style={styles.bookCard} ref={ref}>
        <img
          src={imageContext(`./${image}`)}
          alt="изображение книги"
          style={styles.bookCard.image}
        />
        <div style={styles.bookCard.cardText}>
          <h4 style={styles.bookCard.text}>
            <span style={styles.bookCard.biggerText}>{title}</span> <br />
            <i>{author}</i>
          </h4>
          <p style={styles.bookCard.price}>{price} р.</p>
        </div>
      </div>
    );
  }
);

export default BookCard;
