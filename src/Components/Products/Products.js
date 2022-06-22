import React from 'react';
import { useContext } from 'react';
import { MobileContext } from '../../context/mobile'
import "./Products.css";
import Card from '../Card/Card'
import podcastImg from '../../Images/cards/podcast.svg'
import avImg from '../../Images/cards/audioVisuales.svg'
import avRedesImg from '../../Images/cards/audioVisualesRedes.svg'

const podcast = {
  img: podcastImg,
  title: 'Podcast',
  description: 'Pensamos, construimos y diseñamos formatos de podcast. Los producimos y editamos para ser distribuidos en las principales plataformas.'
}
const av = {
  img: avImg,
  title: 'Audio visuales',
  description: 'Construimos piezas de comunicación, graficas-audiovisuales de acuerdo a las necesidades de los formatos de cada red social. Youtube, FB, IG, TikTok, TW.'
}
const avRedes = {
  img: avRedesImg,
  title: 'Redes',
  description: 'Producimos, grabamos y editamos piezas de comunicación tradicionales en distintos formatos.'
}
const Products = () => {
  const { IsMobile } = useContext(MobileContext)
  return (
    <div className='products__Container'>
      { 
        !IsMobile() && 
        (<>
          <Card {...podcast} />
          <Card right {...av}/>
          <Card {...avRedes}/>
        </>
        )
      }
      {IsMobile() && <div>Estamos en mobile!!</div>}
    </div>
    
  )
}

export default Products