import React from "react";
import Lady from "../../Images/lady.svg";
import styles from "./WhoWeAre.module.css";

const Img = () => {
  return <img src={Lady} className={styles.ImgLady} alt="chica con microfono"></img>;
};

export default Img;
