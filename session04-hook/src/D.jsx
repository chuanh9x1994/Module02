import React, { useContext } from 'react'
import { createContext1 } from './App'

export default function D() {
    const data = useContext(createContext1)         // nhân dữ liệu từ app về
    console.log("33455",data);
  return (
    <>
        <div>D</div>
    </>
  )
}
