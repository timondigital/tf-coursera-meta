import React from "react";
import Nosotros from "./Nosotros";
import Promociones from "./Promociones";
import styles from "../../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.content}>
      <Nosotros />
      <Promociones />
    </div>
  );
};

export default Main;
