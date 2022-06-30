import React from "react";
import styles from './WhoWeAre.module.css';

const Texts = () => {
  return (
    <div className={styles.TxtContainer}>
      <h2 id='quienesSomos'>¿Qué hacemos?</h2>
      <div className={styles.Texts}>
        <p>Creamos y producimos contenidos audiovisuales especialmente para redes sociales.</p>
        <p>Trabajamos en el desarollo de piezas y proyectos audiovisuales junto a equipos de comunicación institucional.</p>
        <p>Acompañamos el desarrollo de proyectos e ideas de organizaciones para sus medios de comunicación de manera integral.</p>
      </div>
    </div>
  );
};

export default Texts;
