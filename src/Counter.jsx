import React, { useState } from 'react'

function Counter() {
    const[counter ,setcounter] = useState(0);

    const decrement = () =>{
      setcounter(counter-1)
    }
  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={()=> setcounter(counter + 1)}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Counter

 
