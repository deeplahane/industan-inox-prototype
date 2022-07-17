import React from "react";
import styles from "./copyright.module.scss";

const Copyright = () => {
  return (
    <div className={styles["copyright"]}>
      <h2 className={styles["copyright__text"]}>
        E-Shop &#8211; &#169; 2022. ALL RIGHTS RESERVED.
      </h2>
    </div>
  );
};

export default Copyright;
