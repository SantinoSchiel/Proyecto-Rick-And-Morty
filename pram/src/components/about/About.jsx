//todo /////// Importo React pq es el lenguaje que usamos y el que proporciona los Hooks necesarios ////////////
import React from 'react';
//todo /////// Importo React pq es el lenguaje que usamos y el que proporciona los Hooks necesarios ////////////


//? /////////////// Creo una funcion About que deberia hablar sobre mi ////////////
function About() {
  return (
    //* En react las funciones deben retornar solo un componente (HTML), para esto creamos una sola etiqueta div que
    //* envuelve todo lo que quiero enviar
    <div style={{color:'black'}}>
      <strong><h1>About Us</h1></strong>
      <p style={{fontSize:"x-large"}}> <strong>Welcome to our about page! Here, you can learn more about our company.</strong> </p>
      
    </div>
  );
}
//? /////////////// Creo una funcion About que deberia hablar sobre mi ////////////

//! ///////// Exporto la funcion para importarla en otro archivo y usarla o renderizarla ////////
export default About;
//! ///////// Exporto la funcion para importarla en otro archivo y usarla o renderizarla ////////