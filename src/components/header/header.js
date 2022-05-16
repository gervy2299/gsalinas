import React from 'react'
import './header.css'

function Header(props){
  return (
    <div className="header"> Hola, {props.nombre}</div>
  );
}

export default Header
