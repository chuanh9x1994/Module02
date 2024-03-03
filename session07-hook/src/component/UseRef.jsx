import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count, setCount] = useState(0);
    const refHook = useRef(0);          // trả về 1 object, có 1 thuộc tính mặc định là current
    console.log(refHook);
    const obj={
        count:0,
    }
    const tang=()=>{
        obj.count=obj.count+1;
        console.log("sau khi click : ", obj.count);
        refHook.current = refHook.current + 1;
        setCount(count+1);
    }
    useEffect(()=>{
        refHook.current.focus();        // tự động focus vào ô input
    },[])
  return (
    <>
        <div>UseRef</div>

        <p>count: {refHook.current}</p>
        <button onClick={tang}>Click</button><br />
        <label htmlFor="">userName</label>
        <input type="text" ref={refHook} /> 
    </>
  )
}
