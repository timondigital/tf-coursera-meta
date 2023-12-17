import React from "react";
import styles from "../../styles/Nosotros.module.css";
import Button from "../Button";

const Nosotros = () => {
  return (
    <>
      <div className={styles.nosotros}></div>
      <div className={styles.contentInfo}>
        <div className={styles.info}>
          <h2 className={styles.h2}>Little Lemon</h2>
          <h3 className={styles.h3}>Chicago</h3>
          <p className={styles.p}>
            Incididunt esse pariatur Lorem proident est reprehenderit duis do.
            Magna irure aliquip aliqua adipisicing. Mollit anim elit non esse.
          </p>
          <Button text="Reservar Mesa" />
        </div>
        <div className={styles.img}></div>
      </div>
    </>
  );
};

export default Nosotros;
