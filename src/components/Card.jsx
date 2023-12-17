import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ ...props }) => {
  const { title, price, text, img, type } = props;
  return (
    <div className={styles.content}>
      <div className={styles.imgContent} style={{ with: "80px" }}>
        <img
          src={img}
          alt={title}
          className={styles.img}
          //style={type === "profile" ? { with: "80%" } : null}
        />
      </div>
      <div className={styles.contentInfo}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {type !== "profile" && <h2 className={styles.price}>$ {price}</h2>}
        </div>
        <p className={styles.text}>{text}</p>
        <p className={styles.footer}>
          {type !== "profile" ? "Envios a domicilio" : "Puntuacion: 9/10"}
        </p>
      </div>
    </div>
  );
};

export default Card;
