import React from "react";
import styles from "./product.module.scss";

import { RiShoppingCart2Line } from "react-icons/ri";

const Product = (props) => {
  return (
    <div className={styles["product"]}>
      <div className={styles["product__wrapper"]}>
        <img
          src={props.image}
          alt="product"
          className={styles["product__image"]}
        />
        <div className={styles["product__button"]}>
          <RiShoppingCart2Line />
        </div>
      </div>
      <h3 className={styles["product__title"]}>{props.title}</h3>
      <p className={styles["product__price"]}>{props.price}</p>
    </div>
  );
};

export default Product;
