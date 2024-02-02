import React, { Component } from 'react'
import Aa from './component/Aa'

export default class App extends Component {
  // hàm tạo contructor
  constructor(){
    super();
    this.state={
      stores:[{
        name: "điện thoại",
        tien: 5000,
        id: 1,
      },
      {
        name: "máy tính",
        tien: 7000,
        id: 2,
      },
      {
        name: "phụ kiện",
        tien: 2000,
        id: 3,
      }]
    }
  }
  render() {
    return (
      <>
        <div>App</div>
        <Aa veA = {this.state.stores}></Aa>
      </>
    )
  }
}
