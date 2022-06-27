import React from "react";
import "./Text.css";

const Text = () => {
  return (
      <div className="TxtContainer">
        <span className="font">Somos</span>
        <div className="flip-card">
          <div className="flip-card-inner">
            <span className="flip-card-front font">profesionales</span>
            <span className="flip-card-back font">fanáticos</span>
          </div>
        </div>
        <div className="flip-card2">
          <div className="flip-card-inner2">
            <span className="flip-card-front2 font">en</span>
            <span className="flip-card-back2 font">de</span>
          </div>
        </div>
        <div>
          <span className="font">
          lo que hacemos
          </span>
          </div>
      </div>
    
  );
};

export default Text;
