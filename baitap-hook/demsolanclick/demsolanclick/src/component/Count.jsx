import React, { useState } from 'react'

export default function Count() {
    const [count,setCount] = useState(0);

    const tang=()=>{
        setCount(count+1);
    }
    const giam=()=>{
        setCount(count-1);
    }
  return (
    <>
        <div>count</div>
        <p>Bạn đã click {count} lần</p>
        <button onClick={tang}> Click để tăng lên.</button>
        <button onClick={giam}> Click để giảm xuống.</button>
    </>
  )
}
