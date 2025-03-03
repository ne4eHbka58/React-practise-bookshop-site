import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <h1>
      <Link to="/" className={`${styles.link} ${styles.h1}`}>
        Lilac Scroll
      </Link>
    </h1>
    <h2>
      <Link to="/cart" className={styles.link}>
        Корзина
      </Link>
    </h2>
  </div>
);

export default Header;
