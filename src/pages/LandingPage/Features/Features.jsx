import React from "react";
import styles from "./features.module.scss";
import { motion } from "framer-motion";

import Button from "../../../components/Button/Button";

const Features = () => {
  return (
    <div className={styles["featured"]}>
      <motion.div
        className={
          styles["featured__section"] + " " + styles["featured__section--1"]
        }
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className={
            styles["featured__image"] + " " + styles["featured__image--1"]
          }
        ></div>
        <div className={styles["featured__content"]}>
          <h2 className={styles["featured__title"]}>
            New arrivals are now in!
          </h2>
          <div>
            <Button text="SHOW COLLECTION" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className={
          styles["featured__section"] + " " + styles["featured__section--2"]
        }
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className={
            styles["featured__image"] + " " + styles["featured__image--2"]
          }
        ></div>
        <div className={styles["featured__content"]}>
          <h2 className={styles["featured__title"]}>Basic t-shirts $29.99</h2>
          <div>
            <Button text="MORE DETAILS" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className={
          styles["featured__section"] + " " + styles["featured__section--3"]
        }
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className={
            styles["featured__image"] + " " + styles["featured__image--3"]
          }
        ></div>
        <div className={styles["featured__content"]}>
          <h2 className={styles["featured__title"]}>Sale this summer</h2>
          <div>
            <Button text="VIEW ALL" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
