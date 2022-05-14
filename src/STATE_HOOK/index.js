import React, { useState } from 'react'

export default function STATE_HOOK() {
    const [count,setCount]= useState(0)
    const handleIncrease = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrease}>Increse</button>
    </div>
  )
}
