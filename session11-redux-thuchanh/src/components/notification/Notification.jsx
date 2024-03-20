import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Notification() {
  const data = useSelector((state)=>{
    console.log("stateê", state);
    return state
  })
  
  
  return (
    <div className="alert alert-success" role="alert" id="mnotification">
      {data.notification}
    </div>
  )
}
