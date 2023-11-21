export default function Validation(input){
    const emailRegExp = /\S+@\S+.\S+/;
    const regexNum = /\d+/;
    const error = {};
    //console.log(error)

    if(!input.email.length) error.email = "Debe ingresar un email"
    if(input.email.length > 35) error.email = "El correo debe tener menos de 35 caracteres"
    else {
        if(!emailRegExp.test(input.email)) error.email = "Debe ingresar un email valido"

    }

    if(!input.password.length) error.password = "Debe ingresar una contraseña"
    if(input.password.length > 6 && 10 > input.password.length) error.password = "La contraseña debe ser tener mas de 6 caracteres y menos de 10"
    else {
        if(!regexNum.test(input.password)) error.password = "La contraseña debe tener al menos un numero"
    }

    return error;
}