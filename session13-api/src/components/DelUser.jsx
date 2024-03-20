import React, { useEffect } from 'react'

export default function DelUser() {
  useEffect(()=>{
    fetch("http://localhost:4000/users/1",{
      method:"DELETE"
    })
  },[])
  return (
    <div>
      *******
      DelUser
      {/* 
          Xóa user : khi xóa phải cần biết xóa user nào, bằng cách lấy id của user cần xóa. 

      */}
    </div>
  )
}
