import React, { Component } from 'react'
import Product from './Product' // import thằng con vào

export default class Products extends Component {
  render() {
    // nhận dữ liệu từ app về ở đây:
    let {data}=this.props;  // cách 1 - destructoring
    // let data=this.props;        // cách 2.
    console.log("1212", data);

    return (
        <>
            List product <br />
            {/* tuyền thằng con vào , data={products} : truyền dữ liệu về thằng con*/}
            {/* <Product data={data}></Product>     */}

            {
                data.map((item,index)=>{
                    return <Product key={index} data={item}></Product>
                })
            }
        </>
    )
  }
}
