import React from 'react';
import logoIzq from "../../Images/logoDer.svg"
import logoDer from "../../Images/logoIzq.svg"
import styles from './Logo.module.css'

const Logo = ({id=undefined}) => {
  return (
    <a id={id} href="/#">
      <img src={logoDer} alt="logoRaíz" className={styles.logoD}/>
      <img src={logoIzq} alt="logoRaizComunicación" className={styles.logoI}/>
    </a>
  )
};

export default Logo;