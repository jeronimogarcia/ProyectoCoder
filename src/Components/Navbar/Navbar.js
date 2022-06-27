import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
