
// ========== MULTIPAL STATE ==============

// import React, { useState } from 'react'

// function Formvalidation() {

//     const [name,setName] = useState("")
//     const [email,setEmail] = useState("")
//     const [pass,setPass] = useState("")
//     const [show,setShow] = useState(null)

//     const Formvalidation = (e) =>{
//         e.preventDefault();
//         console.log(name,email,pass);
//         // setName("");
//         // setEmail("");
//         // setPassword("");
//         setShow(true);
//     }
    
//   return (
//     <>
//       <form onSubmit={Formvalidation}>
//         <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
//         <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
//         <input type="password" placeholder="Enter Your Password" value={pass} onChange={(e)=>setPass(e.target.value)}/><br /><br />
//         <button type="submit">submit</button>
//       </form>
//       {show === null ? "" : 
//       <>
//       <h2>Name : {name}</h2>
//       <h2>Email : {email}</h2>
//       <h2>Password : {pass}</h2>
//       </>
//       }
//     </>
//   )
// }

// export default Formvalidation


// ==========================================




// ============= SINGLE STATE ================

import React, { useState } from 'react'

function Formvalidation() {
  const [input, setInput] = useState({
    name:"",
    email:"",
    pass:"",
    show:null,
  })

  const handelform=(e)=>{
    e.preventDefault();
    console.log(input.name,input.email,input.pass);
    setInput({...input,show:true});
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handelform}>
        <input type="text" placeholder="Enter Your Name" value={input.name} onChange={(e)=>setInput({...input,name :e.target.value})}/><br /><br />
        <input type="Email" placeholder="Enter Your Email" value={input.email} onChange={(e)=>setInput({...input,email :e.target.value})}/><br /><br />
        <input type="Password" placeholder="Enter Your Password" value={input.pass} onChange={(e)=>setInput({...input,pass :e.target.value})}/><br /><br />
        <button>submit</button><br /><br />
      </form>

   

        {
          input.show !== null ?
          <>
          <h1 style={{ color: "white" }}>Name: {input.name}</h1>
       <h1 style={{ color: "white" }}>Email :{input.email}</h1>
       <h1 style={{ color: "white" }}>Psssword :{input.pass}</h1></> : ""
        }

    </>
  )
}

export default Formvalidation



// ==========================================