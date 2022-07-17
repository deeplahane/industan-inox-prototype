import React, { Fragment } from "react";
import styles from "./advantages.module.scss";
import { motion } from "framer-motion";

import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { MdOutlineHighQuality } from "react-icons/md";

const iconStyle = { fontSize: "1.5em" };

const Advantages = () => {
  return (
    <Fragment>
      <motion.h1
        className={styles["advantages__title"]}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Why should you choose us?
      </motion.h1>
      <div className={styles["advantages"]}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles["advantages__icon"]}>
            <MdOutlineDeliveryDining style={iconStyle} />
          </div>
          <h2 className={styles["advantages__subtitle"]}>Free shipping</h2>
          <p className={styles["advantages__text"]}>
            All purchases over $199 are eligible for free shipping via USPS
            First Class Mail.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles["advantages__icon"]}>
            <MdPayment style={iconStyle} />
          </div>
          <h2 className={styles["advantages__subtitle"]}>Easy payments</h2>
          <p className={styles["advantages__text"]}>
            All payments are processed instantly over a secure payment protocol.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles["advantages__icon"]}>
            <BsShieldCheck style={iconStyle} />
          </div>
          <h2 className={styles["advantages__subtitle"]}>
            Money-Back Guarantee
          </h2>
          <p className={styles["advantages__text"]}>
            If an item arrived damaged or you've changed your mind, you can send
            it back for a full refund.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles["advantages__icon"]}>
            <MdOutlineHighQuality style={iconStyle} />
          </div>
          <h2 className={styles["advantages__subtitle"]}>Finest Quality</h2>
          <p className={styles["advantages__text"]}>
            Designed to last, each of our products has been crafted with the
            finest materials.
          </p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Advantages;
