import React from "react";
import styles from "./products.module.scss";
import { motion } from "framer-motion";

import Button from "../../../components/Button/Button";
import ProductCarousel from "../../../components/ProductCarousel/ProductCarousel";

const Products = () => {
  return (
    <motion.div
      className={styles["products"]}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles["products__titlebar"]}>
        <h1 className={styles["products__title"]}>Selected just for you</h1>
        <Button text="SHOW ALL" border={true} />
      </div>
      <ProductCarousel />
    </motion.div>
  );
};

export default Products;
