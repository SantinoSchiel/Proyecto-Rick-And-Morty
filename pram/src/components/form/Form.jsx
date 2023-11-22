import React, { useState } from "react"
import Validation from "../utilities/Validation"

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    
    const [error,setErrors] = useState({})
    
    function handleChange(event) {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value
        }
        );
    

    setErrors(
        Validation({
            ...userData,
            [name]: value
        }
        )
    );
};

function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
}

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
    )
}