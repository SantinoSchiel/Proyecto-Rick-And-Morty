import {createStore} from "redux";
import reducer from "./reducer"

const store = createStore(reducer);
//! Creamos el sotre con la funcion createStore de redux, pasandole el reducer por props.

export default store;