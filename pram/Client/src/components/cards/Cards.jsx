import React from "react";
import Card from "../card/Card";
import style from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   return <div 
               className={style.container}
              style={{
               display: "flex",
               flexWrap: "wrap",
               marginLeft: 30,
               justifyContent: "space-evenly" }}>
               {/* //? Le doy estilo al renderizado de las Cards sobretodo para que esten ordenadas al agregar muchas. */}

{
      !characters.length
      ? <h2 style={{color:"black"}}>Por favor agregue un personaje por su id...</h2>
      :
      characters.map(character => (
         <Card onClose={onClose} key={character.id} {...character} />
      ))
}
      {/* Ternario para pedir que agregue un pj si no hay ninguno, y si agrega mapea characters que es recibido por
      props, renderizando una Card que tiene las propiedades onClose recibida por pros, su unica key y sus
      caracteristicas. */}

   </div>;
}