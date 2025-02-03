import React from "react";
import styles from "./styles";

const Footer = () => {
  var date = new Date();
  return (
    <div className="Footer" style={styles.footer}>
      <h4>
        <a
          href="https://github.com/ne4eHbka58"
          style={styles.footer.h}
          className="link"
        >
          Мой GitHub
        </a>
      </h4>
      <h4 style={styles.footer.h}>Артём Попов © 2025 - {date.getFullYear()}</h4>
    </div>
  );
};

export default Footer;
