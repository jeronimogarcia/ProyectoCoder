import React from 'react';
import logoIzq from "../../Images/logoDer.svg"
import logoDer from "../../Images/logoIzq.svg"
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div>
      <img src={logoDer} alt="logoRaíz" className={styles.logoD}/>
      <img src={logoIzq} alt="logoRaizComunicación" className={styles.logoI}/>
    </div>
  )
};

export default Logo;