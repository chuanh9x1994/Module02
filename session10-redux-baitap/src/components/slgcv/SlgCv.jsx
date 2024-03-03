import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./slgcv.scss"

export default function SlgCv() {
    let data=useSelector((state)=>{
        // console.log("12121",state);
        return state
    })
  return (
    <>
        <div className='title'>Số lượng công việc hiện tại : {data.countJob}</div>
    
    </>
  )
}
