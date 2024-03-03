import React from 'react'
import {Routes,Route, Link, NavLink} from "react-router-dom" /* import 2 cái Routes và Route vào */
import Home from './components/Home'          /* sau đó import các component con vào */
import Contact from './components/Contact'
import Intro from './components/Intro'
import NotFount from './components/NotFount'
import Store from './components/Store'
import Employee from './components/Employee'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import "./App.css"

export default function App() {
  return (
    <>
      <div>App</div>
      <ul>
        <li>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to="/intro">Giới thiệu</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Liên hệ</NavLink>
        </li>
        <li>
          <NavLink to="/products">Sản phẩm</NavLink>
        </li>
      </ul>

      {/* - Routes bọc các Route con vào, thêm thuộc tính path=' (giá trị của thuộc tính href bên trên) ' . 
          - thêm thuộc tính element là các component con.
      */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/intro' element={<Intro></Intro>}>
          <Route path='store' element={<Store></Store>}></Route>
          <Route path='employee' element={<Employee></Employee>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='*' element={<NotFount></NotFount>}></Route>
      </Routes>
    </>
  )
}
