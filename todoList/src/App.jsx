import React from 'react'
import TodoList from './component/TodoList'

export default function App() {
  return (
    <>
      <div>App</div>
      <TodoList></TodoList>
      {/* 
        bài tập todolist : thêm, sửa, xóa công việc.
          Các bước làm: 
            - Bước 1: tạo mảng lưu công việc.
            - Bước 2: Tạo và lấy giá trị của ô input.
            - Bước 3: Đưa các giá trị của ô input vào mảng.
            - Bước 4: Dùng map() để render giá trị của mảng chứa danh sách công việc.
            - Bước 5: thêm các button để thêm, sủa, xóa các công việc.
      
      */}
    </>
  )
}
