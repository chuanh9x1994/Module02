import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("đang gọi vào hàm useEffect");
        // thường dùng để callAPI
        // có các tác vụ gọi API xử lý thì thường dùng trong useEffect
    },[count])
    // giống với component didMout, khi render rồi thì mới chạy useEffect
    /* 
        useEffect có 3 cách dùng:
        1.  useEffect(()=>{
                console.log("đang gọi vào hàm useEffect");
            })
        CÁCH NÀY KHI RE-RENDER THÌ useEffect SẼ ĐƯỢC CHẠY, chạy liên tục
        2. thêm mảng rỗng vào : KHI RE-RENDER KHÔNG CHẠY LẠI.
            useEffect(()=>{
                console.log("đang gọi vào hàm useEffect");
            },[])
        3. trong [] chứa dependency: khi dependency thay đổi thì useEffect mới được gọi, trong [] có thể có nhiều dependency,
            chỉ cần 1 trong các dependency thay đổi thì useEffect sẽ đc gọi. [count, title , ...]
    */
  return (
    <>
        {console.log("12121")};
        <div>useEffect</div>
        <p>count : {count}</p>
        <button onClick={()=>setCount(count+1)}>click</button>
    </>
  )
}
