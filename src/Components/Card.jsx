import React from "react";

const Card = ({ id, img, precio, fecha, artista, setSelected }) => {
  //   console.log(img, precio, fecha, artista);
  //   const { img, artista, precio, fecha } = props;
  //   console.log(img, artista, precio, fecha);
  return (
    <div>
      <img src={img} alt="" />
      <h2>{artista}</h2>
      <h3>${precio}</h3>
      <h4>{fecha}</h4>
      <button onClick={() => setSelected({ id, img, precio, fecha, artista })}>
        Comprar entrada
      </button>
    </div>
  );
};

export default Card;
