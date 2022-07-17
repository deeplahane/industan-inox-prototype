import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <span
      className={
        props.border
          ? styles["button"] + " " + styles["button--border"]
          : styles["button"]
      }
    >
      {props.text}
    </span>
  );
};

export default Button;
