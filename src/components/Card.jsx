import React from "react";

const Card = ({ ...props }) => {
  const { title, price, text, img } = props;
  return (
    <div className="content">
      <img src={img} alt="" />
      <div className="">
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      <p>{text}</p>
      <p>Envios a domicilio</p>
    </div>
  );
};

export default Card;
