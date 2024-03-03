import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Intro() {
    const useNavigate123 = useNavigate();
    const handleClick=()=>{
        console.log("121212");
        // khi muốn chuyển trang, dùng useNavigate
        useNavigate123("/");
    }
  return (
    <>
        <div>Intro</div>
        <button onClick={handleClick}>về trang chủ</button>
        <Outlet></Outlet>
    </>
  )
}
