import React from "react";
import imagen from "../../Images/amico.svg";
import fondo from "../../Images/fondo.png";
import styles from "./Title.module.css";

const Image = () => {
  return (
    <div className={styles.ImgContainer}>
      <img src={imagen} className={styles.Image} alt="logo" />
      <img src={fondo} className={styles.Fondo} alt="logo" />
    </div>
  );
};

export default Image;
