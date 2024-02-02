import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            userName:"",
            passWord:""
        }
    }
    
    // khi làm việc với form, phải ngăn chặn việc submit form, bằng cách truyền sự kiện
  render() {
    const login=(e)=>{
        e.preventDefault();
        console.log("đã chạy hàm login");
        console.log("username",this.state.userName);
        console.log("pass",this.state.passWord);
    }
    const changeName=(event)=>{
        let userName = event.target.value;
    }
    return (
      <div>
        {/* mong muốn khi nhấn logn lấy giá trị các ô nhập */}
        <form action="">
            <label htmlFor="">userName</label>
            <input type="text" onChange={changeName}/> <br />
            <label htmlFor="">passWord</label>
            <input type="text" onChange={changePass}/> <br />
            <button onClick={()=>this.login(event)}>login</button>
        </form>
      </div>
    )
  }
}
