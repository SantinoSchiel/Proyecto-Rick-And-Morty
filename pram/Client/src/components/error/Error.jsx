import React, { Component } from 'react'

export default class Error extends Component {
  render() {
    return (
      <div style={{color:"red"}}><strong>Error 404</strong></div>
    )
  }
}

//? En este archivo renderizamos un mensaje de error para proximamente renderizarlo cuando se ingrese a una ruta
//? no debida.