import React from 'react'

export default function App() {
  // tạo ứng dụng todolist bằng useState
  /* 
    products : [] - chứa danh sách sản phẩm.
    category : [] - chứa danh mục sản phẩm.
    users : [{},{},...] - lưu thông tin của user.
  */
  let products = [];
  let category = [];
  let users = [];
  return (
    <>
      <div>App</div>
      <label htmlFor="name">Họ tên: </label>
      <input type="text" id="name" /> <br />
      <label htmlFor="email">Email: </label>
      <input type="text" id="email" /><br />
      <label htmlFor="pass">Mật khẩu: </label>
      <input type="text" id="pass" /><br />
      <button onClick={dangKy}>đăng ký</button>
      <button>đăng nhập</button>
    </>
  )
}
