import React from 'react'
// import "./header.css"
import "./header.scss"

export default function Header() {
    // let header={
    //     backgroundColor:"red",
    //     color:"white"
    // }
  return (
    <>
        <div className='main'>
          <div className="logo">
            logo
          </div>
          <div className="items">
            <ul className='contact'>
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div className="auth">
            auth
          </div>
        </div>
        
    </>
  )
}
