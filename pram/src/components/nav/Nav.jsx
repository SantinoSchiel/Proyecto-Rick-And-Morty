import React from "react";
import SearchBar from "../searchbar/SearchBar";
//import onSearch from "../App.js"
import { NavLink } from "react-router-dom";


export default function Nav(props) {
    return (
        <div style={{ backgroundColor: "yellow", opacity: 0.8 }}>
            <NavLink to={"/about"}>
                <button style={{ backgroundColor: "skyblue", opacity: 0.6, display: "inline-flex", marginLeft: 100, padding: 10, borderRadius: 10, cursor: "pointer" }}>About</button>
            </NavLink>

            <NavLink to={"/home"}>
                <button style={{ backgroundColor: "skyblue", opacity: 0.6, display: "inline-flex", marginLeft: 100, padding: 10, borderRadius: 10, cursor: "pointer" }}>Home</button>
            </NavLink>

            <NavLink to={"/favorites"}>
                <button style={{ backgroundColor: "skyblue", opacity: 0.6, display: "inline-flex", marginLeft: 100, padding: 10, borderRadius: 10, cursor: "pointer" }}>Favorites</button>
            </NavLink>

            <button onClick={props.logout}> Logout </button>

            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

// export default function Nav(props) {

//     return(
//     <div className="Barra">
//         <NavLink to = "/home">
//             <button>Home</button>
//         </NavLink>

//         <NavLink to = "/about">
//             <button>About</button>
//         </NavLink>

//         <button onClick={props.logout}>Logout</button>

//         <SearchBar onSearch={props.onSearch}/>

//     </div>
//     )
// }