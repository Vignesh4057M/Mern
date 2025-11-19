import React from 'react'
import '../Card/Mord.css'
import Mord from '../Card/Mord'
import image from '../../assets/flower.jpeg'
import image1 from '../../assets/images1.jpeg'
import image2 from '../../assets/graphics1.webp'

export default function Props() {
  return (
    <div className='design'>
      <Mord title='Nature' para='Nature is the beautiful harmony of life,  filled with trees, rivers, and wildlife. It refreshes our mind, nurtures our soul, and connects us to the earth.' image={image}/>
      <Mord title='Ghost' para='A ghost drifts through the shadows, whispering chills into the night. Its presence brings a haunting silence, where danger hides in every breath.' image={image1}/>
      <Mord title='Graphics' para='Graphics bring ideas to life through colors, shapes, and design. They turn imagination into visuals that capture attention and emotion.' image={image2}/>
      
      
    </div>
  )
}
  
