import React, { useEffect } from 'react'

export default function Update() {
    useEffect(()=>{
        let newUser={
            name:"minh vũ"
        }
        fetch("http://localhost:4000/users/2",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newUser)
        })
    },[])
  return (
    <div>
        ******
        Update
        {/* 
            Cập nhật : phải biết được id của user cần cập nhật.
             - để cập nhật, sẽ có 2 method cập nhật:
                1. PUT: cập nhật hoàn toàn.
                2. PATCH: ko cập nhật toàn bộ, chỉ cập nhật những trường theo mong muốn.
        */}
    </div>
  )
}
