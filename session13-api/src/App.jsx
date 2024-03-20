import React from 'react'
import GetUsers from './components/GetUsers'
import CreateUser from "./components/CreateUser";
import DelUser from './components/DelUser';
import Update from './components/Update';


/* 
  Khi lưu dữ liệu trên json-server thì phải thực hiện được 
  CRUD : thêm mới thông tin , lấy thông tin, update thông tin, xóa thông tin . 
   - Để làm việc với json-server, có 2 cách : 
    1. Dùng phương thức  fetch ( có sẵn trong javascript)
    2. Dùng thư viện axios để tương tác.

*/
export default function App() {
  return (
    <div>
      App
      <GetUsers></GetUsers>
      <CreateUser></CreateUser>
      <DelUser></DelUser>
      <Update></Update>
    </div>
  )
}
