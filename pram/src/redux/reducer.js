import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => { //todo En vez de usar action puedo destructurar {type, payload} y usarlos directamente.
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                allCharacters: [...state.allCharacters.filter(char => char.id !== Number(action.payload))],
                myFavorites: [...state.allCharacters.filter(char => char.id !== Number(action.payload))]
            }
        case FILTER:
            if(action.payload === "All"){
                return{
                    ...state,
                    myFavorites: state.allCharacters
                }
            }

            const filteredFavs = state.allCharacters.filter(char => char.gender === action.payload)
            
            return{
                ...state,
                myFavorites: filteredFavs
            }
        case ORDER:
            const orderCopy = [...state.myFavorites];
            if(action.payload === 'A'){
                orderCopy.sort((a,b) => a.id - b.id);
            }
            if(action.payload === 'D'){
                orderCopy.sort((a,b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: orderCopy
            }
        default:
            return {...state}
    }
}

export default reducer;