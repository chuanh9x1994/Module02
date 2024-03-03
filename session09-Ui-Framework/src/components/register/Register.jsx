import React from 'react'
import './register.scss'

export default function Register() {
  return (
    <div className='main'>
        <div className='logo'>
            <img src="../../../public/img/a.jpg"/>
        </div>
        <div className='title'>
            Đăng nhập tài khoản
        </div>
        <div className='info'>
            <label htmlFor="" className='email'>Email</label><br />   
            <input type="text" id='email'/><br />
            <label htmlFor="" className='pass'>Mật khẩu</label><br />   
            <input type="text" id='pass'/>
        </div>
        <div className='qmk'>
            Quên mật khẩu
        </div>
        <div>
            <button className='dangNhap'>Đăng nhập</button>
        </div>
        <div className='hoac'>
            <hr />
            Hoặc
            <hr />
        </div>
        <div className='dn'>
            <button className='gg'>Đăng nhập với Google</button>
            <button className='fb'>Đăng nhập với Facebook</button>
        </div>
        <div className='dangKy'>
            <span>Bạn chưa có tài khoản? </span>
            <span className='dk'> Đăng ký</span>
        </div>
    </div>
  )
}
