import React from "react";
import Card from "../Card";
import perfil from "../../imagenes/perfil.webp";
import styles from "../../styles/Testimonios.module.css";

const Testimonios = () => {
  return (
    <div className={styles.content}>
      <Card
        title="Mariela"
        text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis"
        img={perfil}
        type="profile"
      />
      <Card
        title="Carla"
        text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis"
        img={perfil}
        type="profile"
      />
      <Card
        title="Sofia"
        text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis"
        img={perfil}
        type="profile"
      />
    </div>
  );
};

export default Testimonios;
