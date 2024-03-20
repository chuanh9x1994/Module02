import React from 'react'

export default function App() {
  /* 
    Các phương thức làm việc với HTTP:
     1. GET : dùng để lấy dữ liệu
     2. POT : thường dùng để thêm mới.
     3. DELETE : xóa
     4. PUT : cập nhật hết 
     5. PATCH : cập nhật 1 phần
    Cách setup:
      B1: npm install json-server@0.17.4
      B2: tạo file db.json trong session,
      B3: vào backage.json, 
        ở mục "scripts":
          tạo : "server": "json-server --watch -p 4000 db.json",
      B4: chạy : npm run server
  */
  return (
    <div>
      App
    </div>
  )
}
