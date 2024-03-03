import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    /* 
        - lấy dữ liệu từ store ra dùng:
            sử dụng useSelector , sẽ đi kiểm tra state có thay đổi hay ko để cập nhật.
        - khi muốn cập nhật state mới:
            sủ dụng useDispatch()
    */
   let data=useSelector((state)=>{
        console.log("111",state);
        return state
   })   // trả về data = 1 object có thuộc tính là countReducer có giá trị là state = initialState đã khai báo trước đó. 
        // countReducer:state
    // khai báo hàm 
    let dispatch11=useDispatch();
    const tangLen=()=>{
        console.log("đã gọi hàmm");
        // dispatch11 phải là 1 obj có thuộc tính bắt buộc là type có giá trị tương ứng với case trong switch
        dispatch11({
            type:"tang"
        })
    }
    const giamXuong=()=>{
        dispatch11({
            type:"giam"
        })
    }
  return (
    <>
        <div>Header</div>
        <p>count : {data.countReducer.map((item)=>{
            return <p>{item}</p>
        })}</p>
        <button onClick={tangLen}>Bấm để tăng</button>
        <button onClick={giamXuong}>Bấm để giảm</button>
    </>
  )
}
