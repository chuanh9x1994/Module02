import React from 'react'
import './shopping.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Shopping() {
  return (
    <div className='container'>
        <div className='header'>
            <div>
                <ul  className='menu'>
                    <li className='shop'>Shopping</li>
                    <li>Trang chủ</li>
                    <li>Sản phẩm</li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
            <div>
                <ul className='info'>
                    <li>Giới thiệu</li>
                    <li>Liên hệ</li>
                    <li>Đăng ký</li>
                    <li>Đăng nhập</li>
                    <li><i class="fa-regular fa-circle-user"></i></li>
                </ul>
            </div>
        </div>
        <div className="shoppingCart">
            <div className='title'>
                Shopping Cart
            </div>
            <div className='sp1'>
                <img src="../../../public/img/1.jpg" alt="" />
                <p>Bột ăn dặm</p>
                <div className='slg1'>
                    <div className='dau'>-</div>
                    <input type="text"/>
                    <div className='dau'>+</div>
                </div>
                <div className="price">50.000 VND</div>
                <div>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <div className="sp2">
            <img src="../../../public/img/2.jpg" alt="" />
            <p>Sữa ăn dặm</p>
                <div className='slg2'>
                    <div className='dau'>-</div>
                    <input type="text"/>
                    <div className='dau'>+</div>
                </div>
                <div className="price">500.000 VND</div>
                <div>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <div className="total">
                <span>Tổng tiền : 1.650.000 VND</span>
            </div>
        </div>
    </div>
  )
}
