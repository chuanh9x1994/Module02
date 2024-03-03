import React from 'react'
import Header from './components/Header'

/* 
  Redux : là 1 thư viện javascript (bên thứ 3) giúp việc quản lý state tập trung đc chứa ở store (kho).
   - trong store chứa reducer (bản chất là hàm, nó sẽ đi tính toán, cập nhật lại state dựa vào action.)
   - dùng với reactjs cũng đc, dùng với js thuần cũng đc.
   - khi truyền dữ liệu trong reactjs thì bắt buộc phải truyền theo kiểu cha-con. 
      ví dụ truyền từ ông xuống cháu, phải truyền từ ông > cha > cháu. 
   - cần đến Redux để giúp cho việc quản lý state tập tru.
   - cách cài đặt : 
      . npm i redux react-redux
      . 
 */
export default function App() {
  return (
    <>
      <div>App</div>
      <Header></Header>
    </>
  )
}
