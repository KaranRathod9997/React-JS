import React, { useState } from 'react'

export default function Arrayform() {
    const [input,setInput] = useState({
        name:"",
        Pass:"",
    })

    const [item,setItem] = useState([])


    const heandleform = (e)=>{
        e.preventDefault();
        console.log(input.name,input.Pass);
        setItem([...item,input]);
        setInput({ name:"",
            Pass:"",})
        e.target.reset();
    }


  return (
    <>
      <form onSubmit={heandleform}>
        <input type="text" placeholder="Enter your Name" value={input.name} onChange={(e)=>setInput({...input,name :e.target.value})}/><br/><br />

        <input type="Password" placeholder="Enter your Password" value={input.Pass} onChange={(e)=>setInput({...input,Pass :e.target.value})}/><br/><br />
        <button>submit</button>
      </form><br /><br /><br />

     {
        item.length> 0 && (
            <table border={2}>  
            <thead>  
                <tr>  
                    <td>Sr No.</td>  
                    <td>Name</td>  
                    <td>Password</td>  
                </tr>  
            </thead>  
            <tbody>  
                {item.map((ele, index) => (  
                    <tr key={index}>  
                        <td>{index + 1}</td>  
                        <td>{ele.name}</td>  
                        <td>{ele.Pass}</td>  
                    </tr>  
                ))}  
            </tbody>  
        </table>  
        )
     }
     
    </>


  )
}





