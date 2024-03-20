import React, { useEffect, useState } from 'react'

export default function DangKy() {
    const [user,setUser] = useState({
        email:"",
        password:"",
        comfirmPass:""
    })

    const handleChange=(e)=>{
        let name = e.target.name;       // lấy thuộc tính name của ô input.
        let value = e.target.value;
        console.log("name",name);
        console.log("value",value);
        setUser({...user,[name]:value}) // thêm thuộc tính name có giá trị value vào obj.
    }
    console.log("user",user);

    const dangKy=(event)=>{
        event.preventDefault();
        console.log("dang ky",user);
        fetch("http://localhost:8080/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
    }

    return (
        <div>
            <div className="login-form">
                <form>
                    <h2 className="text-center">Sign up</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user" />
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                required="required"
                                name='email'
                                onChange={()=>handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                required="required"
                                name='password'
                                onChange={()=>handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password"
                                required="required"
                                name='comfirmPass'
                                onChange={()=>handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-primary login-btn btn-block"
                            onClick={dangKy}
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
