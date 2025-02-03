import React from "react";
import styles from "./styles";

const Header = () => (
  <div className="header" style={styles.header}>
    <h1>
      <a
        href="#"
        style={Object.assign({}, styles.header.a, styles.header.h1)}
        className="link"
      >
        Lilac Scroll
      </a>
    </h1>
    <h2>
      <a href="#" style={styles.header.a} className="link">
        Корзина
      </a>
    </h2>
  </div>
);

export default Header;
