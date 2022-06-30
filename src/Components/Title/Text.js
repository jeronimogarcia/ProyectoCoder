import React from "react";
import styles from "./Title.module.css";

const Text = () => {
  return (
    <div className={styles.TitleMainContainer}>
      <div className={styles.TitleContainer}>
        <div className={styles.UpContainer}>
          <span className={styles.Font}>Somos</span>
          <div className={styles.FlipCard}>
            <div className={styles.FlipInner}>
              <span className={`${styles.UpFlipCardFront} ${styles.Font}`}>
                profesionales
              </span>
              <span className={`${styles.UpFlipCardBack} ${styles.Font}`}>
                fanáticos
              </span>
            </div>
          </div>
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.FlipCard}>
            <div className={styles.FlipInner}>
              <span className={`${styles.BottomFlipCardFront} ${styles.Font}`}>
                en
              </span>
              <span className={`${styles.BottomFlipCardBack} ${styles.Font}`}>
                de
              </span>
            </div>
          </div>
          <div>
            <span className={`${styles.Font} ${styles.BottomText}` }>lo que hacemos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
