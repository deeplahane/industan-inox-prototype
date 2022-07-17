import React from "react";
import styles from "./footer.module.scss";
import { motion } from "framer-motion";

import Logo from "../Logo/Logo";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const iconStyle = { fontSize: "1.2rem", color: "gray" };

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <motion.div
        className={styles["footer__column"] + " " + styles["footer__column--1"]}
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a href="#">
          <div className={styles["footer__logo"]}>
            <Logo black={true} standalone={true} />
          </div>
        </a>
        <p className={styles["footer__subtitle"]}>
          E-Shop has clothing for the young, the old & everyone in between
          &#8211; but most importantly, for the fashionable.
        </p>
        <div className={styles["footer__social-media"]}>
          <a href="#">
            <FaFacebookF style={iconStyle} />
          </a>
          <a href="#">
            <FaTwitter style={iconStyle} />
          </a>
          <a href="#">
            <FaLinkedinIn style={iconStyle} />
          </a>
          <a href="#">
            <FaInstagram style={iconStyle} />
          </a>
          <a href="#">
            <FaYoutube style={iconStyle} />
          </a>
        </div>
      </motion.div>
      <motion.div
        className={styles["footer__column"] + " " + styles["footer__column--2"]}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h4 className={styles["footer__title"]}>Shopping online</h4>
        <ul className={styles["footer__list"]}>
          <li>
            <a href="#">Order status</a>
          </li>
          <li>
            <a href="#">Shipping and delivery</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Payment options</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className={styles["footer__column"] + " " + styles["footer__column--3"]}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h4 className={styles["footer__title"]}>Information</h4>
        <ul className={styles["footer__list"]}>
          <li>
            <a href="#">Gift cards</a>
          </li>
          <li>
            <a href="#">Find a store</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">Become a member</a>
          </li>
          <li>
            <a href="#">Site feedback</a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className={styles["footer__column"] + " " + styles["footer__column--4"]}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h4 className={styles["footer__title"]}>Contact</h4>
        <ul className={styles["footer__list"]}>
          <li>kiezikadrian@gmail.com</li>
          <li>Hotline: +1 131 138 138</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
