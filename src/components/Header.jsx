import React from "react";
import Nav from "./Nav";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <img
        className={styles.img}
        src="https://www.48hourslogo.com/oss/works/2022/01/08/0372776096/115168_45900_1de80bd0-6665-4562-894b-a6e9f3fcfe5a.jpg"
        alt="Little Lemon"
      />
      <Nav />
    </header>
  );
};

export default Header;
