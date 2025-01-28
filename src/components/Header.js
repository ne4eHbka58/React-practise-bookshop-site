import React from "react";
import styles from "./styles";

const Header = () => (
  <div className="header" style={styles.header}>
    <h1>
      <a href="#" style={styles.header.a} className="link">
        Liliac Scroll
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
