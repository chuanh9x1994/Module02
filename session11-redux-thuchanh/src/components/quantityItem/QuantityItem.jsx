import React from 'react'
import { useSelector } from 'react-redux'

export default function QuantityItem() {
  const data = useSelector((state)=>{
    return state;
  })
  return (
    <div>
      <tfoot id="my-cart-footer">
          <tr>
            <td colSpan={4}>
              There are <b>{data.addToCart.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
              {data.addToCart.reduce((accumulator,currentValue)=>{
                return accumulator + currentValue.quantityItem * currentValue.itemPrice;
              },0)} USD
            </td>
          </tr>
        </tfoot>
    </div>
  )
}
