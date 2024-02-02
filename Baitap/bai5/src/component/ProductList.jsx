import React from 'react'
import { useState } from 'react'

export default function ProductList() {
    const [products,setProducs] = useState([
        {id:1 , name:"điện thoại" , price:10},
        {id:2 , name:"máy tính" , price:20},
        {id:3 , name:"phụ kiện" , price:30},
    ])
  return (
    <>
        <div>ProductList</div>
        <ul>
            {products.map((item)=>{
                return <li key={item.id}>
                    {item.name} : ${item.price}
                </li>
            })}
        </ul>
    </>
  )
}
