import React from "react";
import Img from "./Img";
import Texts from "./Texts";
import Rectangulo from "./Rectangulo";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="whoWeAre__Container">
      <div className="whoWeAre__textRecContainer">
        <Rectangulo></Rectangulo>
        <Texts></Texts>
      </div>
      <div>
        <Img></Img>
      </div>
    </div>
  );
};

export default WhoWeAre;
