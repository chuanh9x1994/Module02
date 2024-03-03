import React, { useMemo, useState } from 'react'


// cho 3 ô input, người dùng sẽ nhập giá trị tên, giá, số lượng, 
// sau đó in ra tổng hóa đơn người dùng mua.

// các bước làm
// b1 : dùng onchane lấy giá trị từ input
// b2: lưu các giá trị vào mảng.
// b3 : dùng hàm để tính
// b4: hiển thị kết quả
export default function UseMemo() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [quatity, setQuatity] = useState("")
    const [cart,setCart] = useState([]);
    const mua=()=>{
        setCart([...cart,{
            name:name,
            price:+price,
            quatity:+quatity,
        }])
    }
    console.log("cart: ",cart);
    let result = useMemo(()=> {
        console.log("giá phải trả : ");
        let pay = cart.reduce((accumulator,item)=>{
            return accumulator+item.price*item.quatity;
        },0)
        return pay;
    },[cart])
    // function tăng cout
    const upCount=()=>{
        setCount(count+1);
    }
    
  return (
    <>
        <div>UseMemo</div>
        <label htmlFor="">Nhập tên : </label>
        <input 
        type="text" 
        onChange={(event)=>setName(event.target.value)}
        />  <br />
        <label htmlFor="">Nhập giá : </label>
        <input 
        type="text" 
        onChange={(event)=>setPrice(event.target.value)}
        />  <br />
        <label htmlFor="">Nhập số lượng : </label>
        <input 
        type="text"
        onChange={(event)=>setQuatity(event.target.value)} 
        />  <br />
        <button onClick={mua}>mua</button>
        <p>Count : {count}</p>
        <button onClick={upCount}>Tăng count</button>
        <button>Giá phải trả : {result}</button>
    </>
  )
}
