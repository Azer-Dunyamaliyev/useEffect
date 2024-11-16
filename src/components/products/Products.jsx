import React, { useEffect, useState } from 'react'
import '../products/products.scss'
import axios from 'axios'
import Procard from '../proCard/Procard'
const Products = () => {
    const [pro,setPro] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            setPro(res.data)
        })
    },[])
  return (
    <div className="cards">
        {pro && pro.map(item => <Procard key={item.id} item={item} />)}
    </div>
  )
}

export default Products