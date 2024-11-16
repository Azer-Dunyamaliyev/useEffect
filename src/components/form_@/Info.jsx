import React, { useState } from 'react'
import '../form_@/info.scss'
import axios from 'axios'
const Info = () => {
    const [title,setTitle] = useState()
    const [price,setPrice] = useState()

    const getPost = (e) => {
        e.preventDefault()
        let mypost = {title,price}
        axios.post("https://northwind.vercel.app/api/categories",mypost)
        console.log(mypost);
    }
  return (
    <form action="" onSubmit={getPost}>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button>add</button>
    </form>
  )
}

export default Info