import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}
//! Creamos un estado inicial con las prop myFavorites y allCharacters iniciadas en un arreglo vacio, donde se
//! guardaran mis cartas                   favoritas   y todas las cartas.
//! PD: allCharacters es creado por si necesitamos en determinado caso aplicar una logica sobre todas las cartas
//! de nuestros favs, pq tal vez la lista myFavorites este afectada por algun filtro u orden.


const reducer = (state = initialState, {type, payload}) => { //todo En vez de usar action puedo destructurar {type, payload} y usarlos directamente.
    //! La funcion reducer recibe por props un state, que es nuestro estado inicial y una respectiva accion.
    switch(type){
        //! Switch recibe el tipo de nuesta accion recibida por props y lo compara con los siguientes casos:
        // REDUCER | ADD_FAV
        case ADD_FAV:{
            return { ...state, myFavorites: payload, allCharacters: payload };
        }
            //! Este caso agrega la carta a mis favs y por lo tanto de allCharacters.
        // REDUCER | REMOVE_FAV
        case REMOVE_FAV:{
            return { ...state, myFavorites: payload, allCharacters: payload };
        }
            //! Este caso elimina la carta a mis favs y por lo tanto de allCharacters.
        case FILTER:
            if(payload === "All"){
                return{
                    ...state,
                    myFavorites: state.allCharacters
                }
            }
            //! Primero le damos la condicion de que si seleccionamos la opcion All muestre allCharacters que no 
            //! estara afectada por nunguna accion.

            const filteredFavs = state.allCharacters.filter(char => char.gender === payload)
            //! Creamos esta constante que filtra segun el genero comparando el genero de cada character de la
            //! lista allCharacters con el payload recibido de la accion.
            
            return{
                ...state,
                myFavorites: filteredFavs
            }
            //! Retornamos la lista myFavorites con los characters filtrados segun el genero.
        case ORDER:
            const orderCopy = [...state.myFavorites];
            //! Creamos una copia de mi lista de favs, ya que la funcion sort modfica la lista y no devuleve una nueva.
            if(payload === 'A'){
                orderCopy.sort((a,b) => a.id - b.id);
            }
            if(payload === 'D'){
                orderCopy.sort((a,b) => b.id - a.id);
            }
            //! Con la funcion sort ordenamos creciente o decrecientemente la lista de favs segun la opcion seleccionada.
            return {
                ...state,
                myFavorites: orderCopy
            }
            //! Retornamos la lista de favs con el valor de la copia modificada segun el orden.
        default:
            return {...state}
            //! En cualquier otro caso retornamos el estado acutal.
    }
}

export default reducer;