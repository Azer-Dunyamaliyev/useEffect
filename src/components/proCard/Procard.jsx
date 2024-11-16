import React from 'react'
import '../proCard/procard.scss'
const Procard = ({item}) => {
  return (
    <div className="card">
        <img src={item.image} alt="#" />
        <p>{item.title}</p>
        <p>${item.price}</p>
    </div>
  )
}

export default Procard