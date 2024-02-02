import React, { createContext, useState } from 'react'
import UseState from './component/UseState'
import UseEffect from './component/useEffect'
import UseContext from './component/UseContext'
import A from './component/A'

export const createContext1 = createContext(); // tạo ngữ cảnh  
export default function App() {
  const [name,setName] = useState("hoa");
  return (
    <>
    <div>App</div>
    <UseState></UseState>
    <UseEffect></UseEffect>
    <UseContext></UseContext>
    <createContext1.Provider value={name}>  {/*  truyền dữ liệu */}
      <A></A>
    </createContext1.Provider>
    
    </>
  )
}
