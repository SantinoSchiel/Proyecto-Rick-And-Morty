//todo /////////// actions-creators //////////////
//todo Estas actions las crearemos para usarlas en el reducer.

import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

//todo Cada funcion tiene su respectivo type y recibe algun valor por props que se guardara en la prop payload.