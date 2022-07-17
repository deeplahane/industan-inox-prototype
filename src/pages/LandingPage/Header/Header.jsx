import React from "react";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

const buttonStyle = { fontSize: "2.2em", color: "gold" };
const featureIconStyle = { fontSize: "1.3em", color: "orange" };

const Header = () => {
  return (
    <div className={styles["header"]}>
      <motion.div
        className={styles["header__image"]}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.h1
        className={styles["header__title"]}
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Sale of the <br />
        summer <br />
        collection
      </motion.h1>
      <motion.div
        className={styles["header__button"]}
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <BsFillArrowRightCircleFill style={buttonStyle} />
        <Link to="/" style={{ color: "white" }}>
          Shop now
        </Link>
      </motion.div>
      <div className={styles["features"]}>
        <div className={styles["features__feature"]}>
          <div className={styles["features__icon"]}>
            <MdOutlineDeliveryDining style={featureIconStyle} />
          </div>
          <div>
            <h3 className={styles["features__title"]}>Free shipping</h3>
            <p className={styles["features__subtitle"]}>
              On purchases over $199
            </p>
          </div>
        </div>
        <div className={styles["features__feature"]}>
          <div className={styles["features__icon"]}>
            <MdOutlineSentimentVerySatisfied style={featureIconStyle} />
          </div>
          <div>
            <h3 className={styles["features__title"]}>
              99% Satisfied Customers
            </h3>
            <p className={styles["features__subtitle"]}>
              Our clients opinions speak for themselves
            </p>
          </div>
        </div>
        <div className={styles["features__feature"]}>
          <div className={styles["features__icon"]}>
            <BsShieldCheck style={featureIconStyle} />
          </div>
          <div>
            <h3 className={styles["features__title"]}>
              Originality Guaranteed
            </h3>
            <p className={styles["features__subtitle"]}>
              30 days warranty for each product from our store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
