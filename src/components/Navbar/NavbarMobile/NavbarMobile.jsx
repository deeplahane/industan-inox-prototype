import React from "react";
import styles from "./navbarmobile.module.scss";

const NavbarMobile = (props) => {
  return (
    <div
      className={
        props.open
          ? styles["mobile"] + " " + styles["mobile--open"]
          : styles["mobile"]
      }
    >
      <ul
        onClick={() => {
          props.setOpen(false);
        }}
      >
        <li>Products</li>
        <li>Contact</li>
        <li>Why us?</li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
