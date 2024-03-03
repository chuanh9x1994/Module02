import React, { useCallback, useState } from 'react'
import UseRef from './component/UseRef'
import UseReducer from './component/UseReducer'
import UseCallback from './component/UseCallback'
import UseMemo from './component/UseMemo';

export default function App() {
  // const [countt, setCountt]=useState(0);
  // const bam=()=>{
  //   setCountt(countt+1);
  // }

  // const useCallback1= useCallback(()=>{
  //   console.log("1111");
  // },[])
  return (
    <>
      <div>App</div>
      {/* <UseRef></UseRef><br /> */}
      ----------
      {/* <UseReducer></UseReducer><br /> */}
      ---------
      {/* <UseCallback memo={useCallback1}></UseCallback> */}
      <br />
      {/* <p>countt : {countt}</p> */}
      {/* <button onClick={bam}>bấm bấm</button> */}
      <br />
      ----------
      <UseMemo></UseMemo>
    </>
  )
}
