import React, { forwardRef } from "react";
import styles from "./BookCard.module.css";
import { imageContext } from "../../utils/bookUtils";

const BookCard = forwardRef(
  ({ image, title, author, description, price, onClick }, ref) => {
    return (
      <div className={styles.bookCard} ref={ref} onClick={onClick}>
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
