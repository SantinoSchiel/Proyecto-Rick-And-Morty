import axios from "axios"
import { useParams } from "react-router-dom"
//? El hook useParams nos permite acceder desde un componente a los parámetros de la ruta.

import { useState, useEffect } from "react"
// const URL = "https://rym2.up.railway.app/api/character";
// const API_KEY = "henrystaff";
// `${URL}/${id}?key=${API_KEY}`


export default function Detail() {
    const { id } = useParams();
    // Guardamos el valor useParams en {id}.

    const [character, setCharacter] = useState([]);
    // Creamos el estado character iniciandolo en un array vacio.

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id]);

    // Solicitamos una promesa con useEffecto pasandole la url con los datos de los personajes con las condiciones
    // de agregar un personaje y si este ya existe nos muestre una alerta, todo esto cada vez que se actualice
    // o cambie el id.



    return (
        <div style={{display:"flex",marginLeft:800}}>
            {character.name && (
                <div style={{color:"black"}}>
                    <h2 style={{opacity:0.8,backgroundColor:"gray",marginBottom:0}}>Name: {character.name}</h2>
                    <h2 style={{opacity:0.8,backgroundColor:"gray",margin:0}}>Status: {character.status}</h2>
                    <h2 style={{opacity:0.8,backgroundColor:"gray",margin:0}}>Species: {character.species}</h2>
                    <h2 style={{opacity:0.8,backgroundColor:"gray",margin:0}}>Gender: {character.gender}</h2>
                    <h2 style={{opacity:0.8,backgroundColor:"gray",margin:0}}>Origin: {character.origin && character.origin.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            )}
        </div>
        //todo En este return renderizamos todas las caracteristicas de nuestro pj.
    )
}