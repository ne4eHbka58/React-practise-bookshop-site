import React from "react";
import styles from "./styles";

const imageContext = require.context(
  "../assets/images",
  false,
  /\.(png|jpg|jpeg|gif)$/
);

const BookCard = ({ image, title, author, description }) => {
  return (
    <div className="BookCard" style={styles.bookCard}>
      <img
        src={imageContext(`./${image}`)}
        alt="изображение книги"
        style={styles.bookCard.image}
      />
      <h4 style={styles.bookCard.text}>
        {title}, <i>{author}</i>
      </h4>
      <p
        style={Object.assign(
          {},
          styles.bookCard.text,
          styles.bookCard.textDescription
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default BookCard;
