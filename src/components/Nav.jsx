import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <a href="#heroes">Heroes</a>
      </li>
      <li>
        <a href="#promociones">Promociones</a>
      </li>
      <li>
        <a href="#nosotros">Nosotros</a>
      </li>
      <li>
        <a href="#testimonios">Testimonios</a>
      </li>
      <li>
        <a href="#login">Login</a>
      </li>
    </ul>
  );
};

export default Nav;
