import React from "react";
import styles from "./navbar-links.module.scss";
import { Link } from "react-router-dom";

const NavbarLinks = (props) => {
  return (
    <nav className={styles["links"]}>
      <ul className={styles["links__list"]}>
        <Link to="/products">
          <li
            className={
              props.scrolled
                ? styles["links__link"] + " " + styles["links__link--black"]
                : styles["links__link"]
            }
          >
            Products
          </li>
        </Link>
        <a href="/contact-us">
          <li
            className={
              props.scrolled
                ? styles["links__link"] + " " + styles["links__link--black"]
                : styles["links__link"]
            }
          >
            Contact
          </li>
        </a>
        <a href="/why-us">
          <li
            className={
              props.scrolled
                ? styles["links__link"] + " " + styles["links__link--black"]
                : styles["links__link"]
            }
          >
            Why us?
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
