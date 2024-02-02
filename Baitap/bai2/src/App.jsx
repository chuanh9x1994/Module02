import React from 'react'
import Aa from './component/Aa'
import { createContext } from 'react'
import { useState } from 'react';

export const nguCanh = createContext();
export default function App() {
  let [name,setName] = useState("chu tuấn anh");
  let [state,setState] = useState({count:0, salary:15});
  console.log(state);
  return (
    <>
      <div>App</div>
      <nguCanh.Provider value={name}>
        <Aa></Aa>
      </nguCanh.Provider>
      
    </>
  )
}
