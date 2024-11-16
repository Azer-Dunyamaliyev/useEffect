import React from 'react'
import '../card/card.scss'
const Card = ({item}) => {
  return (
    <div className="card">
        <p>{item.name}</p>
        <p>{item.description}</p>
    </div>
  )
}

export default Card