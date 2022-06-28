import React from "react";
import styles from "./index.module.css";

const Container = ({ children, background, style }) => {
  return (
    <div
      className={styles.container}
      style={{ ...style, backgroundColor: background }}
    >
      {children}
    </div>
  );
};

export default Container;
