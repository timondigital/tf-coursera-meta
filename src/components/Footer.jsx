import React from "react";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.contentImg}>
        <img
          src="https://www.48hourslogo.com/oss/works/2022/01/08/0372776096/115168_45900_1de80bd0-6665-4562-894b-a6e9f3fcfe5a.jpg"
          alt="Little Lemon"
          className={style.img}
        />
      </div>
      <a href="">Contactanos</a>
    </footer>
  );
};

export default Footer;
