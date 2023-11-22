import React from "react";
import Card from "../card/Card";

export default function Cards({ characters, onClose }) {
   return <div 
              style={{
               display: "flex",
               flexWrap: "wrap",
               marginLeft: 30,
               justifyContent: "space-evenly" }}>

{
      !characters.length
      ? <h2>Por favor agregue un personaje por su id...</h2>
      :
      characters.map(character => (
         <Card onClose={onClose} key={character.id} {...character} />
      ))}

   </div>;
}