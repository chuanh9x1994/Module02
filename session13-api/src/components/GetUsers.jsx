import React, { useEffect, useState } from 'react'

/* 
    Thông thường các tác vụ call API thì nên call ở trong useEffect
*/
export default function GetUsers() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        // bắt đầu đi lấy data. lấy dữ liệu mới cần .then, còn thêm thì ko cần
        fetch("http://localhost:4000/users")
        .then(respone=>respone.json())
        .then(data=>{
            console.log("111111",data);
            setUsers(data);
        })
    },[])
  return (
    <div>
        GetUsers
        <ul>
            {
                users.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
                })
            }
        </ul>
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Họ và tên</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item,index)=>{
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>
  )
}
