import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = (props) => {
  return (
    <div
      className={
        props.standalone
          ? styles["logo__container"] +
          " " +
          styles["logo__container--standalone"]
          : styles["logo__container"]
      }
    >
      <Link to={'/'}>
        <img
          src="/assets/logo.svg"
          alt="logo"
          className={
            props.black
              ? styles["logo"] + " " + styles["logo--black"]
              : styles["logo"]
          }
        />
      </Link>
      <Link to={'/'}>
        <div className="hidden md:block">
          <p
            className={
              props.black
                ? styles["logo__title"] + " " + styles["logo__title--black"]
                : styles["logo__title"]
            }
          >
            Hindustan Inox
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
