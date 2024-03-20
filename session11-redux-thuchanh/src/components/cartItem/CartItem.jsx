import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartItem() {
  const stt = 0;
  const data = useSelector ((state)=>{
    return state
  })
  const dispatch12 = useDispatch();
  let checkId = -1;
  const tang=(id)=>{
    checkId=id;
    const itemA = data.addToCart.find((item)=>{
      return item.itemId == checkId
    })
    itemA.quantityItem = itemA.quantityItem+1;
    localStorage.setItem("carts",JSON.stringify(data.addToCart));
    dispatch12({
      type:"update"
    })
  }
  const giam=(id)=>{  
    checkId=id;
    const itemB = data.addToCart.find((item)=>{
      return item.itemId == checkId
    })
    itemB.quantityItem = itemB.quantityItem-1;
    localStorage.setItem("carts",JSON.stringify(data.addToCart));
    dispatch12({
      type:"update"
    })
  }
  const del=(id)=>{
    checkId=id;
    const checkDel = confirm("bạn có chắc chắn muốn xóa hay không?");
    const itemC = data.addToCart.find((item)=>{
      return item.itemId == checkId
    })
    const indexDel = data.addToCart.indexOf(itemC);
    if (checkDel) {
      data.addToCart.splice(indexDel,1)
    } else{
      return
    }
    localStorage.setItem("carts",JSON.stringify(data.addToCart));
    dispatch12({
      type:"del"
    })
  }
  return (
    <div><div className="panel panel-danger">
    <div className="panel-heading">
      <h1 className="panel-title">Your Cart</h1>
    </div>
    <div className="panel-body">
      <table className="table">
        <thead>
          <tr>
            <th width="4%">STT</th>
            <th>Name</th>
            <th width="15%">Price</th>
            <th width="4%">Quantity</th>
            <th width="25%">Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="my-cart-body">
          {data.addToCart.length==0 ? <p> Chưa có sản phẩm</p> : data.addToCart.map((item)=>{
            return <tr>
            <td>{stt+1}</td>
            <td>{item.itemName}</td>
            <td>{item.itemPrice}</td>
            <td>
              <p onClick={()=>tang(item.itemId)}>+</p>
              {item.quantityItem}
              <p onClick={()=>giam(item.itemId)}>-</p>
              </td>
            <td>
              {item.itemPrice*item.quantityItem} USD
            </td>
            <td>
              <button onClick={()=>del(item.itemId)}>Delete</button>
            </td>
          </tr>
            
          })}
        </tbody>
        
      </table>
    </div>
  </div></div>
  )
}
