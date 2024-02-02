import React, { Component } from 'react'
import Products from './component/Products'  // import thằng cha vào.

export default class App extends Component {
  constructor(){
    super()

    this.state={
      products:[{
        name:"iphone",
        id:12,
      },
      {
        name:"samsung",
        id:13,
      }
    ],
      isActive:false,
      title:"học lập trình",
    }
  }
  render() {
    const handleClick=()=>{
      this.setState({
        title:"học lập trình javascript"
      })
    }
    const name1 = "hoa";
    const age = 20;
    const students=["vân","minh","hoa","nam","linh"];
    let obj={
      name:"minh hà",
    }
    return (
      <>
        <h1>app</h1>
        <p>tên của bạn là :{name1}</p>
        <p>năm nay {age} tuổi</p>
        <p>{students}</p>
        {/* do React không hiển thị được object nên phải dùng ntn, nhưng có thể hiển thị được các thuộc tính của object */}
        <p>{JSON.stringify(obj)}</p>      
        <ul>
          {students.map((item,index)=>{
              return <li key={index} > {item} </li>
          })}
        </ul>
        <p>title: {this.state.title}</p>
        <button onClick={handleClick}>changeName</button><br />

        {/* đưa danh sách sản phẩm vào - truyền thằng cha vào, data={this.state.products} : để truyền dữ liệu từ app về Products */}
        <Products data={this.state.products}></Products>    
      </>
    )
  }
}
