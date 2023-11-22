import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../card/Card";

export default function favorites({onClose}){

    const myFavorites = useSelector(state => state.myFavorites);

    return(
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:30,justifyContent:"space-evenly"}}>
            {myFavorites.map(favorite => (
                <Card onClose={onClose} key={favorite.id} {...favorite}/>
            ))}
        </div>
    )
}