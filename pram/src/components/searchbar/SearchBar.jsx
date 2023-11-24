import React, { useState } from "react";


export default function SearchBar(props) {
   const [id,setId] = useState("")
   //? Creamos el estado id iniciandolo como un string vacio.

   const handleChange = event => {
      const {value} = event.target
      setId(value)
   }
   //? Esta funcion recibe un evento y desestructura el value del event.target y setea el estado id con este value.

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   //? Esta funcion recibe un evento, usa la funcion onSearch recibida por props y le pasa el id de nuestro input
   //? para agregar la carta y luego setea el id nuevamente en string vacio.



   return (
      <div style={{alignItems:"center",backgroundColor:"gray",borderStyle:"none"}}>
         
         <input value={id} onChange={handleChange} type='search' placeholder="id..." style={{borderRadius:6,padding:7,margin:10}}/>
         <button onClick={handleClick} style={{margin:10,backgroundColor:"yellow",borderRadius:7,padding:7,borderBlockStyle:"solid",cursor:"pointer",fontSize:"medium"}}> <strong>Agregar</strong></button>
         <button style={{backgroundColor:"yellow",borderRadius:7,padding:7,borderBlockStyle:"solid",cursor:"pointer",marginBottom:10,fontSize:"medium"}} className="random-button" onClick={() => props.onSearch(Math.ceil(Math.random() * 826))}><strong>Agregar random</strong></button>
      </div>
      //todo Renderizamos un input donde pedimos que se ingrese un id, este se guardara en el value del evento, 
      //todo tambien tiene la propiedad onChange que ejecuta handleChange. Luego tenemos el boton para agregar
      //todo la carta con el id ingreasdo, este boton tiene la prop onClick que ejecuta handleClick y por ultimo
      //todo el boton add random con las props className="random-button"  y
      //todo onClick={() => props.onSearch(Math.ceil(Math.random() * 826))} para agregar un id random de los 826 disponibles.
   );
}