import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function CountTime() {
    
    const [countTime,setCountTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);

    useEffect(()=>{
        let a;
        if(isRunning) {
            a = setTimeout(()=>{
                setCountTime(countTime+0.001);
            },1)
        } else {
            clearTimeout(a);
        }
        return () => clearTimeout(a);
    })

    const start=()=>{
        setIsRunning(true);
    }
    const end=()=>{
        setIsRunning(false);
    }
  return (
    <>
        <div>CountTime</div>
        <p>Đếm thời gian {countTime.toFixed(3)}</p>
        <button onClick={start}>Bắt đầu</button>
        <button onClick={end}>Dừng</button>

    </>
  )
}
