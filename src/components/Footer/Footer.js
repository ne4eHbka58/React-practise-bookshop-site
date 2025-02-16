import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  var date = new Date();
  return (
    <div className={styles.footer}>
      <h4>
        <a href="https://github.com/ne4eHbka58" className={styles.h}>
          Мой GitHub
        </a>
      </h4>
      <h4 className={styles.h}>Артём Попов © 2025 - {date.getFullYear()}</h4>
    </div>
  );
};

export default Footer;
