import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <h1>
      <a href="#" className={`${styles.a} ${styles.h1}`}>
        Lilac Scroll
      </a>
    </h1>
    <h2>
      <a href="#" className={styles.a}>
        Корзина
      </a>
    </h2>
  </div>
);

export default Header;
