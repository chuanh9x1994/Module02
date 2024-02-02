import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let {data}=this.props; // nhận dữ liệu từ thằng cha về.
    console.log("22334",data);

    return (
      <>
        <div>{data.name}</div>
      </>
    )
  }
}
