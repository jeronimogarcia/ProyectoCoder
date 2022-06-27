import React from 'react'
import imagen from '../../Images/amico.svg'
import fondo from '../../Images/fondo.png'
import './Image.css'

const Image = () => {
  return (
    <div className='container'>
        <img src={imagen} className='imagen' alt="logo"/>
        <img src={fondo} className='fondo' alt="logo" />
    </div>
  )
}

export default Image