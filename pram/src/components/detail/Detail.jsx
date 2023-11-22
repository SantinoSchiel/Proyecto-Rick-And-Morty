import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";


export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`).then(
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
    )
}