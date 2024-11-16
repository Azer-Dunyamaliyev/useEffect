import React, { useEffect, useState } from 'react'
import '../form/form.scss'
import axios from 'axios'
import Card from '../card/Card'
const Form = () => {

    const [dataApi,setDataApi] = useState([])
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories")
        .then(res => {
            setDataApi(res.data)
            console.log("Api get",dataApi);
        })
                
    },[])

    const postData = (e) => {
        e.preventDefault()
        let formData = {
             name ,
                email,
             mobile,
            password
        }
        console.log(formData);
        axios.post("https://northwind.vercel.app/api/categories",formData)
    }

  return (
    <>
        <div className="form">
            <form action="" onSubmit={postData}>
                <h3>Registration page</h3>
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                <label htmlFor="">Email ID:</label>
                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <label htmlFor="">Mobile No:</label>
                <input type="text" value={mobile} onChange={(e) => {setMobile(e.target.value)}}/>
                <label htmlFor="">Password:</label>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <div className="button">
                    <button>Submit</button>
                </div>
            </form>
        </div>

        <div className="cards">
            {dataApi && dataApi.map(item => <Card key={item.id} item={item} />)}
        </div>
    </>
  )
}

export default Form