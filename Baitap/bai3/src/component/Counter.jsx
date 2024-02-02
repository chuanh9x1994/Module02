import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    function tang() {
        setCount(count+1);
    }
    function giam() {
        setCount(count-1);
    }
  return (
    <>
        <div>Counter</div>
        <p>Count : {count}</p>
        <button onClick={tang}>Tăng lên</button>
        <button onClick={giam}>Giảm xuống</button>
    </>
  )
}
