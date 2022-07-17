import React, { useLayoutEffect, useState } from "react";
import styles from "./navbar.module.scss";

import Logo from "../Logo/Logo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const Navbar = ({ page }) => {
  const [scrolled, setScrolled] = useState(page && page === "home" ? false : true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", ListenToScroll);
  });

  const ListenToScroll = () => {
    const windowScroll = document.documentElement.scrollTop;

    if (page && page === "home") {
      if (windowScroll > 0) {
        setScrolled(true);
        return;
      }
      setScrolled(false);
    } else {
      setScrolled(true);
    }

  };

  return (
    <React.Fragment>
      <div
        className={
          scrolled
            ? styles["navbar"] + " " + styles["navbar--scrolled"]
            : styles["navbar"]
        }
      >
        <Logo black={scrolled} />
        <NavbarLinks scrolled={scrolled} />
        <NavbarMenu scrolled={scrolled} setOpen={setMobileNavOpen} />
      </div>
      <NavbarMobile open={mobileNavOpen} setOpen={setMobileNavOpen} />
    </React.Fragment>
  );
};

export default Navbar;
