import React from "react";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateForm = { opacity: 0, y: -45 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className={styles.Navbar}>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{delay:0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="./#">Inicio </a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{delay:0.2}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="./#quienesSomos">¿Que hacemos?</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{delay:0.35}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="./#products">Productos</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
