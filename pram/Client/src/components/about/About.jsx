//todo /////// Importo React pq es el lenguaje que usamos y el que proporciona los Hooks necesarios ////////////
import React from 'react';
//todo /////// Importo React pq es el lenguaje que usamos y el que proporciona los Hooks necesarios ////////////


//? /////////////// Creo una funcion About que deberia hablar sobre mi ////////////
function About() {
  return (
    //* En react las funciones deben retornar solo un componente (HTML), para esto creamos una sola etiqueta div que
    //* envuelve todo lo que quiero enviar
    <div style={{color:'black',backgroundColor:'grey',opacity:0.8}}>
      <strong><h1>Conóceme!</h1></strong>
      <p style={{fontSize:"x-large"}}> <strong>¡Hola! Soy Santino, un apasionado por la programacion. Con una mente inquieta y curiosa, siempre estoy buscando nuevas formas de aprender y crecer. Me encanta enrtrenar, jugar a la pelota y disfrutar entre familia y amigos, creo firmemente en la importancia de aprender a disfrutar los momentos buenos de la vida y adquirir conocimientos de los malos, tambien me gusta llevar una vida organizada y rutinaria. Este espacio es mi rincón para compartir ideas, experiencias y descubrimientos. ¡Bienvenido/a a mi mundo! ✨</strong> </p>
      
    </div>
  );
}
//? /////////////// Creo una funcion About que deberia hablar sobre mi ////////////

//! ///////// Exporto la funcion para importarla en otro archivo y usarla o renderizarla ////////
export default About;
//! ///////// Exporto la funcion para importarla en otro archivo y usarla o renderizarla ////////