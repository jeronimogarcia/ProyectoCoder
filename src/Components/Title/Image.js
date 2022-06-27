import React from 'react'
import imagen from '../../Images/amico.svg'
import fondo from '../../Images/fondo.png'
import './Image.css'

const Image = () => {
  return (
    <div className='container'>
        <img src={imagen} className='imagen' alt="logo" width='500px' />
        <img src={fondo} className='fondo' alt="logo" width='750px' />
    </div>
  )
}

export default Image