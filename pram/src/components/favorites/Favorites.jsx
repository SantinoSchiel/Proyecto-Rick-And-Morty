import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

export default function favorites({ onClose }) {

    const myFavorites = useSelector(state => state.myFavorites);
    //? Seleccionamos la seccion myFavorites del state y la guardamos en una constante.

    const dispatch = useDispatch();

    const handleOrder = event => {
        dispatch(orderCards(event.target.value));
    }
    //? Esta funcion recibe un evento por parametro y despacha la funcion orderCards con el value del evento
    //? (event.target.value), tambien podriamos  destructurar (const {value} = event.target) para despachar value.

    const handleFilter = event => {
        dispatch(filterCards(event.target.value))
    }
    //? Esta funcion recibe un evento y despacha la funcion filterCards con el value del evento.
    
    return (

        <div>
            <div>
                <select style={{backgroundColor: "skyblue", opacity: 0.8, padding: 5, borderRadius: 10, cursor: "pointer",fontSize:"large"}} name="order" onChange={handleOrder}>
                    <option value="A"> <strong>Ascendente</strong> </option>
                    <option value="D"> <strong>Descendente</strong> </option>
                </select>
                <select name="filter" onChange={handleFilter} style={{backgroundColor: "skyblue", opacity: 0.8, padding: 5, borderRadius: 10, cursor: "pointer",fontSize:"large"}}>
                    <option value="All"> <strong>All</strong> </option>
                    <option value="Male"><strong>Male</strong></option>
                    <option value="Female"><strong>Female</strong></option>
                    <option value="Genderless"><strong>Genderless</strong></option>
                    <option value="Unknow"><strong>Unknow</strong></option>
                </select>
            </div>
            //Todo Renderizamos varias opciones para ordenar las cartas de nuestros favoritos segun orden o genero.

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: 30,
                    justifyContent: "space-evenly"
                }}>

                {
                    !myFavorites.length
                    ? <h2 style={{color:"orangered"}}>Agregue un personaje a sus favoritos!</h2>
                    :
                    myFavorites.map(favorite => (
                        <Card onClose={onClose} key={favorite.id} {...favorite} />
                    ))
                }
            </div>
            //Todo Este ternario pide que agregues una carta a tus favs si es que no hay, y si hay renderiza la Card.
        </div>


    )
}