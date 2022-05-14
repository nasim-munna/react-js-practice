import React, { useState } from 'react'
import style from './form.module.css'

export default function Form() {
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    const [user,setUser]= useState({name:'',email:'',password:''})
    const {name,email,password}=user;
    const handleChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    // const handleNameChange =(e)=>{
    //     setName(e.target.value);
    // }
    // const handleEmailChange =(e)=>{
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange =(e)=>{
    //     setPassword(e.target.value);
    // }
    const handleSubmit = (e)=>{
        
        // let userInfo ={
        //     name,
        //     email,
        //     password,
        // };
        console.log(user);
        e.preventDefault();
    };
  return (
    <>
    <form action='' onSubmit={handleSubmit}>
    <div className={style.formGroup}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' id='name' value={name} required onChange={handleChange}></input>
    </div>
    <div className={style.formGroup}>
    <label htmlFor='email'>Email: </label>
        <input type='email' name='email' id='email' value={email} onChange={handleChange} required></input>
    </div>
    <div className={style.formGroup}>
    <label htmlFor='password'>Password: </label>
        <input type='password' name='password' value={password} id='password' required onChange={handleChange}></input>
    </div>
    <div>
        <button type='submit' >Register</button>
    </div>
    </form>
    </>
  )
}
