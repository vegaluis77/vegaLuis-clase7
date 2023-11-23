/* eslint-disable react/prop-types */

import {  useState } from "react";

const useMostrarMensaje = () => {
  const [mensaje, setMensaje] = useState("");
  const [mensajeBoton, setMensajeboton] = useState("COMPRAR");

  const handleMensaje = () => {
     {
       mensaje.length === 0 && mensajeBoton === "COMPRAR"
         ? setMensajeboton("COMPRADO!") || setMensaje("Gracias por su compra!")
         : setMensaje("") || setMensajeboton("COMPRAR");
     }
   }
  return {
    mensaje,
    mensajeBoton,
    handleMensaje,
  };
}

export const Articulo = ({ imagen,nombre, descripcion, precio, sku, disponible }) => {
  
  const { mensaje, handleMensaje, mensajeBoton } =
    useMostrarMensaje();

  return (
    <article>
      <img src={imagen} />
      <p>NOMBRE :{nombre}</p>
      <p className="descrip">DESCRIPCIÓN:{descripcion}</p>
      <p>PRECIÓ: ${precio}</p>
      <p>SKU: {sku}</p>
      <p>CANTIDAD DISPONIBLE: {disponible} UND</p>
      <button onClick={handleMensaje}>{mensajeBoton}</button>
      <p className="comprado">{mensaje}</p>
    </article>
  );
}
