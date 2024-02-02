import React, { Component } from 'react'
import Info from './components/Info';
import Form from './components/Form';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name:"hoa",
      isLogin:false,
    }
  }
  componentDidUpdate(){
    console.log("giai đoạn thứ 3 : componentDidUpdate");
  }
  shouldComponentUpdate(){
    console.log("giai đoạn thứ 3 : shouldComponentUpdate");
    return true;
  }
  componentDidMount(){
    // thằng này quan trọng, vì đây là thời điểm thich hợp để gọi API.
    console.log("componentDidMount");
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  checkLogin=()=>{
    // giả sử check đăng nhập thành công
    this.setState({
      isLogin:true,
    })
  }
  render() {
    console.log("component re-render");
    return (
      <>
      <div>App</div>
      <p>{this.state.name}</p>
      <button onClick={()=>this.setState({name:"huệ"})}> bấm bấm bấm</button>
      {this.state.isLogin && <Info></Info>}
      <button onClick={this.checkLogin}>login</button> <br />
      <Form></Form>
      </>
    )
  }
}
