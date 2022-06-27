import React from "react";
import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburIcon = (
    <GiHamburgerMenu
      className={styles.Hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <MdClose
      className={styles.Hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return <nav className={styles.MobileNavigation}>
    {open ? closeIcon : hamburIcon}
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    
    </nav>;
};

export default MobileNavigation;
