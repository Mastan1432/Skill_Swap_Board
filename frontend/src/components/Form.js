import React, { useState } from 'react'
import axios from "axios";
import "../styles/Form.css";

const Form = ({refreshPosts,setUserMobile}) => {
    const [formData,setFormData]=useState({name:"",teach:"",learn:"",mobile:""})

    const handleChange=(e)=>setFormData({...formData,[e.target.name]:e.target.value});

    const handleSubmit=async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:4050/api/posts',formData);
    
        refreshPosts();
        setUserMobile(formData.mobile);

        setFormData({name:"",teach:"",learn:"",mobile:""});
    };

  return (
    <form className='formCantainer' onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' value={formData.name} onChange={handleChange}/><br/>
        <input name='teach' placeholder='Can Teach' value={formData.teach} onChange={handleChange}/><br/>
        <input name='learn' placeholder='Want to Learn' value={formData.learn} onChange={handleChange}/><br/>
        <input name='mobile' placeholder='Mobile Number' value={formData.mobile} onChange={handleChange}/><br/>
        <button type='submit'>Post</button>
    </form>
  )
}

export default Form;