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
        <div>
            {character.name && (
                <div style={{color:"white"}}>
                    <h2>Name: {character.name}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Species: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin && character.origin.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            )}
        </div>
    )
}