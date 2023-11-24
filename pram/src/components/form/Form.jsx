import React, { useState } from "react"
import Validation from "../utilities/Validation"

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    //? Creamos el estado userData que es un objeto con las propiedades "email" y "password" con valor string vacio.
    
    const [error,setErrors] = useState({})
    //? Creamos el estado error iniciandolo como un objeto vacio donde se almacenan los errores existenttes.
    
    function handleChange(event) {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value
        }
        );
    //? Destructuramos los valores name y value, luego seteamos el estado userData guardando el estado acutual
    //? y en el valor name del evento (entre [] pq no va a ser siempre el mismo) guardamos el value del evento.

    setErrors(
        Validation({
            ...userData,
            [name]: value
        }
        )
    );
    //? Seteamos el estado error pasandole la funcion Validation que recibe un objeto con el estado actual y
    //? guarda en el name del evento el value del evento. (La funcion Validation es la encargada de renderizar los errores en pantalla).
};

function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
}
//? Esta funcion recibe un evento, usamos preventDefault para que no se nos actualice la pagina y se nos pierdan 
//? los datos, luego ejecutamos la funcion login recibida por props en la funcion Form, pasandole el estado userData.

    return (
        <div style={{display:"flex", marginLeft:800,marginTop:100,padding:10}}>
            <form onSubmit={handleSubmit}>
                <label style={{color:"black"}}><strong>Email: </strong></label>
                    <input value={userData.email} key="email" type="email" id="email" name="email" onChange={handleChange} placeholder="Nombre..." style={{backgroundColor:"greenyellow",opacity:0.8,borderRadius:6,padding:7}}/>
                    <p style={{color:"black"}}><strong>{error.email ? error.email : null}</strong></p>
                <label style={{color:"black"}}><strong>Password: </strong></label>
                    <input value={userData.password} key="password" type="password" id="password" name="password" onChange={handleChange} placeholder="Contraseña..." style={{backgroundColor:"greenyellow",opacity:0.8,borderRadius:6,padding:7}}/>
                    <p style={{color:"black"}}><strong>{error.password ? error.password : null}</strong></p>

                <button type="submit" onSubmit={handleSubmit} disabled={error.email || error.password} style={{backgroundColor:"greenyellow",borderRadius:6,padding:4}}><strong>Enviar</strong></button>    
            </form>
        </div>
        //todo Renderizamos el login, es decir el texto email y password con sus respectivos inputs que seran
        //todo recibidos por nuestras funciones antes creadas, y por ultimo el boton de tipo submit, para enviar
        //todo los datos ingresados (si hay errores presentes estara deshablilitado).
    )
}