import React from "react";
import "./Texts.css";

const Texts = () => {
  return (
    <div>
      <h2 className="texts__h2">
        <span className="texts__turquoise">¿Que </span>
        <span className="texts__green">hacemos?</span>
      </h2>
      <div className="texts__Container">
        <p>
        <span className="texts__green">Creamos y producimos </span>
        <span className="texts__light">contenidos audiovisuales especialmente para redes sociales.</span>
        </p>
        <span className="texts__light">Trabajamos en el </span>
        <span className="texts__green">desarrollo de piezas y proyectos audiovisuales </span>
        <span className="texts__light">junto a equipos de comunicación instritucional.</span>
        <p>
        <span className="texts__green">Acompañamos </span>
        <span className="texts__light">
          el desarrollo de proyectos e ideas de organizaciones para sus medios
          de comunicación de manera integral.
        </span>
        </p>
        <p>
        <span className="texts__green">Somos fanáticos de lo que hacemos. Somos profesionales en lo que hacemos.</span>
        </p>
      </div>
    </div>
  );
};

export default Texts;
