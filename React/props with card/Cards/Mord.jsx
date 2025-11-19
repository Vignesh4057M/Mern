import React from 'react'

import './Mord.css'

export default function Mord(Props) {
  return (
    
    <div className='cards'>
      <img src={Props.image} alt=""  width={350} height={180}/>
      <h3>{Props.title}</h3>      
      <p>{Props.para}</p>
     
    </div>
  )
}
