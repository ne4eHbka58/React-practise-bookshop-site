import React, { forwardRef } from "react";
import styles from "./CartProduct.module.css";
import { imageContext } from "../../utils/bookUtils";

const CartProduct = forwardRef(
  (
    {
      bookId,
      image,
      title,
      author,
      price,
      quantity,
      onAddToCart,
      onRemoveFromCart,
      onImageClick,
    },
    ref
  ) => {
    const handleAddToCartClick = (event) => {
      event.stopPropagation(); //  Предотвращаем всплытие события
      onAddToCart(bookId);
    };

    const handleRemoveFromCartClick = (event) => {
      event.stopPropagation(); //  Предотвращаем всплытие события
      onRemoveFromCart(bookId);
    };
    return (
      <div className={styles.cartProduct} ref={ref}>
        <img
          src={imageContext(`./${image}`)}
          alt="изображение книги"
          className={styles.image}
          onClick={onImageClick}
        />
        <div>
          <h4 className={styles.bookInfo}>
            <span className={styles.bookName}>{title}</span> <br />
            <i>{author}</i>
          </h4>
          <div className={styles.buttons}>
            <button
              onClick={handleRemoveFromCartClick}
              className={`${styles.button} ${styles.leftButton}`}
            >
              -
            </button>
            <div className={`${styles.button}`}>{quantity}</div>
            <button
              onClick={handleAddToCartClick}
              className={`${styles.button} ${styles.rightButton}`}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <h4 className={styles.price}>{price * quantity} р.</h4>
        </div>
      </div>
    );
  }
);

export default CartProduct;
