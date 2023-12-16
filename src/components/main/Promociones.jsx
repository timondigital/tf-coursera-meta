import React from "react";
import Card from "../Card";

const Promociones = () => {
  return (
    <>
      <div className="promociones">
        <h2>Promociones</h2>
        <div className="buttom">Comprar</div>
      </div>
      <div className="content-card">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Promociones;
