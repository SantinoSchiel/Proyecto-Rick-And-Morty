export default function Validation(input){
    //? Esta funcion recibe un input por props.

    const emailRegExp = /\S+@\S+.\S+/;
    const regexNum = /\d+/;
    const error = {};
    //? Constantes para validar el login y error como un objeto vacio inicialmente.

    if(!input.email.length) error.email = "Debe ingresar un email"
    if(input.email.length > 35) error.email = "El correo debe tener menos de 35 caracteres"
    else {
        if(!emailRegExp.test(input.email)) error.email = "Debe ingresar un email valido"

    }
    //? Estas condiciones renderizan mensajes de error si no se cumplen siertas reglas y las guarda en el arreglo
    //? error, en este caso en la propiedad email.

    if(!input.password.length) error.password = "Debe ingresar una contraseña"
    if(input.password.length > 6 && 10 > input.password.length) error.password = "La contraseña debe ser tener mas de 6 caracteres y menos de 10"
    else {
        if(!regexNum.test(input.password)) error.password = "La contraseña debe tener al menos un numero"
    }
    //? Aca lo mismo pero en la propiedad password.

    return error;
    //? Retornamos el arreglo.
}