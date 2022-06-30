import React from "react";
import Img from "./Img";
import Texts from "./Texts";
import Rectangulo from "./Rectangulo";
import "./WhoWeAre.css";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.TextMain}>
        <Rectangulo></Rectangulo>
        <Texts></Texts>
        <div className={styles.ImgContainer}>
          <Img></Img>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
