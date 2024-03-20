import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tang } from './actions/counter12';
import { giam } from './actions/counter12';

export default function App() {
  const couter = useSelector((state)=>{
    console.log("state",state);
    return state
  })
  const disPatch=useDispatch();
  const tang = ()=>{
    disPatch(tang(3))
  }
  const giam=()=>{
    disPatch(giam(4))
  }
  return (
    <div>
      App
      <br />
      <p>giá trị count : {couter.counter}</p>
      <button onClick={tang}>tăng</button>
      <button onClick={giam}>giảm</button>
    </div>
  )
}
