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
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{color:"white"}}>Email: </label>
                    <input value={userData.email} key="email" type="email" id="email" name="email" onChange={handleChange}/>
                    <p style={{color:"white"}}>{error.email ? error.email : null}</p>
                <label style={{color:"white"}}>Password: </label>
                    <input value={userData.password} key="password" type="password" id="password" name="password" onChange={handleChange}/>
                    <p style={{color:"white"}}>{error.password ? error.password : null}</p>

                <button type="submit" onSubmit={handleSubmit} disabled={error.email || error.password}>Submit</button>    
            </form>
        </div>
    )
}