import React from 'react'
import { useNavigate } from 'react-router-dom';

/* 
    Tạo danh sách sản phẩm.    
*/

let products = [{
    name:"iphone5",
    id:5,
},{
    name:"iphone6",
    id:6,
},{
    name:"iphone7",
    id:7,
}]
export default function Products() {
    const useNavigate345 = useNavigate();
    const handleClick=(id)=>{
        console.log("11223344",id);
        useNavigate345(`/products/${id}`)
    }
  return (
    <>
        <div>Danh sách sản phẩm</div>
        <ul>
            {products.map((item,id)=>{
                return <li key={id}>{item.name}
                    <button onClick={()=>handleClick(item.id)}>click</button>
                </li>
                
            })}
            
        </ul>
    </>
  )
}
