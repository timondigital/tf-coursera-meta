import React from "react";
import Card from "../Card";
import styles from "../../styles/Promociones.module.css";
import Button from "../Button";
import pizza from "../../imagenes/pizza.jpg";
import burger from "../../imagenes/burger.jpg";
import hotdog from "../../imagenes/hotDog.webp";

const Reservas = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promoHeader}>
        <h2>Promociones</h2>
        <Button text="Online Menu" />
      </div>
      <div className={styles.contentCard} id="promos">
        <Card
          title="HotDog"
          price="5.00"
          text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis"
          img={hotdog}
        />
        <Card
          title="Burgers"
          price="10.00"
          text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis."
          img={burger}
        />
        <Card
          title="Pizza"
          price="9.00"
          text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis"
          img={pizza}
        />
        <Card
          title="HotDog x2"
          price="8.00"
          text="Officia id et officia cupidatat incididunt non qui dolore eu veniam. Anim voluptate pariatur deserunt veniam magna. Officia reprehenderit sit est quis"
          img={hotdog}
        />
      </div>
    </div>
  );
};

export default Reservas;
