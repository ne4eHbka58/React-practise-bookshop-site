import React from "react";
import styles from "./styles";

const imageContext = require.context(
  "../assets/images",
  false,
  /\.(png|jpg|jpeg|gif)$/
);

const BookCard = ({ image, title, author, description, price }) => {
  return (
    <div className="BookCard" style={styles.bookCard}>
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
      {/* <p
        style={Object.assign(
          {},
          styles.bookCard.text,
          styles.bookCard.textDescription
        )}
      >
        {description}
      </p> */}
    </div>
  );
};

export default BookCard;
