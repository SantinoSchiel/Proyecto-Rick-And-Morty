//todo /////////// actions-creators //////////////
//todo Estas actions las crearemos para usarlas en el reducer.

import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"

// ACTION | addFav
export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {

         const { data } = await axios.post(endpoint, character);

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });

      };
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

// ACTION | removeFav
export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         
         const { data } = await axios.delete(endpoint);

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      };
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

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