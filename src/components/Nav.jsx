import React from "react";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/reservas"}>Reservas</Link>
      </li>
      <li>
        <Link to={"/"}>Nosotros</Link>
      </li>
      <li>
        <Link to={"/testimonios"}>Testimonios</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};

export default Nav;
