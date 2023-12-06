import React from "react";
import SearchBar from "../searchbar/SearchBar";
//import onSearch from "../App.js"
import { NavLink } from "react-router-dom";


export default function Nav(props) {
    return (
        <div style={{ backgroundColor: "rgba(255, 255, 0, 0.523)"}}>
            <NavLink to={"/about"}>
                <button style={{ backgroundColor: "skyblue", opacity: 1, display: "inline-flex", marginLeft: 100, padding: 10, borderRadius: 10, cursor: "pointer" }}> <strong style={{fontWeight:800}}>About🤔</strong></button>
            </NavLink>

            <NavLink to={"/home"}>
                <button style={{ backgroundColor: "skyblue", opacity: 1, display: "inline-flex", marginLeft: 100, padding: 10, borderRadius: 10, cursor: "pointer" }}><strong style={{fontWeight:800}}>Home🏡</strong></button>
            </NavLink>

            <NavLink to={"/favorites"}>
                <button style={{ backgroundColor: "skyblue", opacity: 1, display: "inline-flex", marginLeft: 100, padding: 10, borderRadius: 10, cursor: "pointer" }}><strong style={{fontWeight:800}}>Favorites🤩</strong></button>
            </NavLink>

            <button style={{ backgroundColor: "red" , opacity: 1, display: "inline-flex", marginLeft: 1200, padding: 10, borderRadius: 10, cursor: "pointer" }} onClick={props.logout}><strong style={{fontWeight:800}}>Logout❌</strong></button>

            <SearchBar onSearch={props.onSearch} closeAll={props.closeAll}/>
        </div>
        //* La funcion Nav renderiza la barra de navegacion para poder desplazarse por la pagina, cada boton te
        //* dirige a su respectiva ruta. Tambien tenemos el boton logout con la propiedad onClick = {props.logout}
        //* que te dirige a la pagina de inicio para loguearse.
    )
}