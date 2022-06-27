import React from "react";
import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
