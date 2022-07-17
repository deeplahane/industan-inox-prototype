import React from "react";
import styles from "./newsletter.module.scss";
import { motion } from "framer-motion";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const Newsletter = () => {
  return (
    <motion.div
      className={styles["newsletter"]}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src="/assets/newsletter.jpg"
        alt="newsletter"
        className={styles["newsletter__image"]}
      />
      <div className={styles["newsletter__content"]}>
        <div className={styles["newsletter__column"]}>
          <h1 className={styles["newsletter__title"]}>
            Subscribe to our newsletter and receive exclusive offers every week
          </h1>
        </div>
        <div className={styles["newsletter__column"]}>
          <Input type="email" placeholder="Email address" />
          <Button text="SUBSCRIBE" />
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
