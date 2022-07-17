import React from "react";
import styles from "./input.module.scss";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={styles["input"]}
    />
  );
};

export default Input;
