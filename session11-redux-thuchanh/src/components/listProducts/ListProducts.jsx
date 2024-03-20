import React, { useState } from 'react'
// import Product from '../product/Product'
import { useDispatch, useSelector } from 'react-redux'

export default function ListProducts() {
  const [quantity, setQuantity] = useState(0);
  const data = useSelector((state) => {
    return state
  })
  const itemQuantity = (event) => {
    setQuantity(event.target.value);
  }
  const dispatch1 = useDispatch();
  let checkId = -1;
  const addCart = (id) => {
    checkId = id;
    const itemX = data.dataProducts.find((item, id) => {
      return item.id == checkId;
    })
    dispatch1({
      type: "addCart",
      payload: {
        itemId: itemX.id,
        itemName: itemX.name,
        itemPrice: itemX.price,
        quantityItem: +quantity,
      }
    })
  }
  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {data.dataProducts.map((item, id) => {
              return <div>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src={item.img}
                        alt="pizza"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{item.name}</h4>
                    <p>
                      {item.describe}
                    </p>
                    <input
                      name="quantity-product-1"
                      type="number"
                      min={1}
                      // defaultValue={1}
                      onChange={() => { itemQuantity(event) }}
                    />
                    <a data-product={1} className="price" onClick={() => addCart(item.id)}>
                      {item.price} USD
                    </a>
                    {/* <span className="price">{item.price}</span> */}
                  </div>
                </div>
              </div>
            })}

            {/* <div>
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/Hamburger.jpg"
                      alt="pizza"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Hamburger</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <input
                    name="quantity-product-1"
                    type="number"
                    min={1}
                    defaultValue={4}
                  />
                  <a data-product={1} className="price">
                    15 USD{" "}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/bread.jpg"
                      alt="pizza"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Bread</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <input
                    name="quantity-product-1"
                    type="number"
                    min={1}
                    defaultValue={1}
                  />
                  <a data-product={1} className="price">
                    20 USD{" "}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/Cake.jpg"
                      alt="pizza"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Cake</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <input
                    name="quantity-product-1"
                    type="number"
                    min={1}
                    defaultValue={1}
                  />
                  <a data-product={1} className="price">
                    10 USD{" "}
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
