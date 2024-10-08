import React, { useState } from 'react'

function Formvalidation() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [show,setShow] = useState(null)

    const Formvalidation = (e) =>{
        e.preventDefault();
        console.log(name,email,pass);
        // setName("");
        // setEmail("");
        // setPassword("");
        setShow(true);
    }
    
  return (
    <>
      <form onSubmit={Formvalidation}>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <input type="password" placeholder="Enter Your Password" value={pass} onChange={(e)=>setPass(e.target.value)}/><br /><br />
        <button type="submit">submit</button>
      </form>
      {show === null ? "" : 
      <>
      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
      <h2>Password : {pass}</h2>
      </>
      }
    </>
  )
}

export default Formvalidation
