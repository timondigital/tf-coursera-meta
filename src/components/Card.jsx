import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ ...props }) => {
  const { title, price, text, img } = props;
  return (
    <div className={styles.content}>
      <div className={styles.imgContent}>
        <img src={img} alt={title} className={styles.img} />
      </div>
      <div className={styles.contentInfo}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <h2 className={styles.price}>$ {price}</h2>
        </div>
        <p className={styles.text}>{text}</p>
        <p className={styles.footer}>Envios a domicilio</p>
      </div>
    </div>
  );
};

export default Card;
