import React from "react";
import Heroes from "./Heroes";
import Nosotros from "./Nosotros";
import Promociones from "./Promociones";
import Testimonios from "./Testimonios";
import styles from "../../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.content}>
      {/* 
<Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes> */}

      <Heroes />
      <Nosotros />
      <Promociones />
      <Testimonios />
    </div>
  );
};

export default Main;
