import React from 'react'
import { useContext } from 'react'
import { nguCanh } from '../App'

export default function Cc() {
  const cccc = useContext(nguCanh)
  console.log("tên tôi là : ", cccc);
  return (
    <div>Cc</div>
  )
}
