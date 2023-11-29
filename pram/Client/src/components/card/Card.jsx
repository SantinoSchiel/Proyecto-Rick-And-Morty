import React, { useEffect, useState } from "react"; 
//? Importo la libreria con la que vamos a trabajar (React) y los Hooks que voy a usar.
//? useEffect y useState se activan en la fase de Updating, es decir cuando el componente esta siendo actualizado
//? => Cuando actualizamos el estado de nuestro componente, la pagina tiene que recargar su contenido en pantalla
//? para tener en cuenta el cambio que hicimos.
//? Luego de actualizar la pagina la aplicacion ejecuta useEffect si es que esta presente en el componente.

//? useState: esta funcion crea una estado aceptando un valor inicial para esa variable y devuelve un array con
//? dos elementos, la variable inicial y la funcion que modifica esa variable.
//? Es importante tener en cuenta que cuando usamos la funcion set del useState pisa la variable inicial, por lo que
//? debemos ir guardando nuestro estado (...state) spread operator

//? useEffect: limpia un componente antes de desmontarlo del DOM, esta funcion acepta una funcion como argumento
//? esta funcion se ejecuta cuando el componente se renderiza por primera vez y cada vez que se actualiza el
//? componente, tambien a esta funcion podemos decirle especificamente cuando ejecutarse, pasandole como segundo
//? argumento la lista de los elementos de los que depende, por lo tanto la funcion se ejecutara cada vez que uno
//? de estos elementos cambie. Y por ultimo si queremos que se ejecute solo una vez le pasamos una lista vacia.


import { Link } from "react-router-dom"; 
//? Importo el Hook Link desde la libreria R-R-D.
//? Link nos permite crear un enlace para navegar en nustra pagina y a diferencia de usar un href, Link navega
//? al nivel del cliente, es decir hacen la navegacion en el navegador en vez de ejecutar una nueva peticion
//? a nuestro servidor y esto es mucho mas eficiente y utilizado.


import { useDispatch } from "react-redux"; 
//? Importo el Hook useDispatch, una herramienta muy eficiente que la usamos para despachar acciones
//? Que signifca que despachemos? => Desde mi punto de vista, cuando usamos la funcion y "despachamos" o "enviamos" una accion
//? es como pasarle un cb (con sus respectivos argumentos) por params a useDispatch y "¿este lo realiza en el sitio web?"

//? Internet: Almacenamos useDispatch() en una variable "dispatch", dispatch trabaja con todas las actions (allActions) del archivo
//? actions.js, allActions es como un objeto con todas las acciones que nosotros definimos.
//? Dispatch toma esa accion que le damos y compara en el reducer.js para ver si coincide con alguno de los action.types

import { addFav, removeFav } from "../../redux/actions";
//? Importamos las funciones para poder utilizarlas en el HandleFavorite

import { useSelector } from "react-redux/es/hooks/useSelector";
//? Toma una funcion por argumento y te retorna la seccion que vos queres del state.

export default function Card(props) {
   //todo Creamos la funcion Card que recibe props por parametros, las props son una coleccion de datos obtenida
   //todo del contenedor padre.

   const myFavorites = useSelector(state => state.myFavorites);
   //todo Creamos la constante myFavorites, y usando useSelector le damos la seccion de myFavorites
   //todo del estado inicial.

   const dispatch = useDispatch();
   //todo Creamos la constante dispatch para usarla mas adelante, obviamente para despachar acciones.

   const [isFav, setIsFav] = useState(false);
   //todo Creamos un estado iniciandolo en false (porque inicialmente es imposible que la card que agreguemos
   //todo ya este en mis favoritos)


   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false)
         dispatch(removeFav(props.id));
      }
      if (isFav === false) {
         setIsFav(true)
         dispatch(addFav(props));
      }
   }
   //todo Creamos la funcion que no recibe nada por parametro y directamente compara con el estado creado anteriormente
   //todo y decimos que si esta en favs setee mi variable a false y que la remueva segun su id de nuestros favs.
   //todo Por otro lado si no esta en nuestros favs, le decimos que setee la variable en true y que agregue la card
   //todo con sus props a nuestros favs.

   useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         if (myFavorites[i].id === props.id) {
            setIsFav(true);
         }
      };
      // myFavorites.forEach((fav) => {
      //   if (fav.id === props.id) {
      //     setIsFav(true);
      //   }
      // });
   }, [myFavorites]);
   //todo Con esta funcion basicamente hacemos que se vaya actualizando la pagina y que se renderice correctamente
   //todo todo en la pagina, pq le decimos que si tenemos una card en el el DOM y esta tambien esta en mis favs setee la variable a true, 
   //todo y esto se va a realizar cada vez que tengamos cambios en mi lista de favs.


   return (
      <div style={{ margin: 20 }}>
         {
            isFav ? (
               <button onClick={handleFavorite} style={{ display: "flex", borderStyle: "solid", borderRadius:5, backgroundColor:"grey", cursor: "pointer" }}>❤️</button>
            ) : (
               <button onClick={handleFavorite} style={{ display: "flex", borderStyle: "solid", borderRadius:5, backgroundColor:"grey", cursor: "pointer" }}>🤍</button>
            )
         }
         {/* Aqui renderizamos los emoji ❤️🤍❤️ y le decimos que si esta en favs renderice ❤️ y si no 🤍, para identificar si esta o no en mis favs. */}

         <button onClick={() =>  props.onClose(props.id) } style={{ opacity: 0.8, backgroundColor: "red", marginLeft: 277, marginTop: 0, display: "flex", cursor: "pointer", borderStyle: "solid" }}><strong>X</strong></button>
         {/* Boton que ejecuta onClose que toma el id de la carta para eliminarla */}

         <img src={props.image} alt=''/>
         {/* Imagen del personaje */}
         
         <Link to={`/detail/${props.id}`} style={{textDecoration:"none",color:"black"}}>
            <h2 style={{ backgroundColor: "yellow", display: "flex", margin: 0, opacity: 0.6}}>{props.name}</h2>
         </Link>
         {/* Link que envuelve el nombre del personaje para mostrar los details del pj */}


         {/* <h2 style={{backgroundColor:"gray",display:"flex",margin:0}}>{props.status}</h2> */}


         <h2 style={{ backgroundColor: "gray", display: "flex", margin: 0, opacity: 0.8 }}>{props.species}</h2>
         <h2 style={{ backgroundColor: "gray", display: "flex", margin: 0, opacity: 0.8 }}>{props.gender}</h2>
         {/* Renderizado de la especie y genero del pj */}


         {/* <h2 style={{backgroundColor:"gray",display:"flex",margin:0}}>{props.origin.name}</h2> */}



      </div>
   );
}