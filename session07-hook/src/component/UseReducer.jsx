import React, { useReducer } from 'react'


// UseReducer sinh ra để quản lý những state phức tạp.
// bản chất cũng giống như UseState, nhưng dùng để quản lý các State phức tạp, và để sau này học Redux.

export default function UseReducer() {
    const reducer=(state,action)=>{
        switch (action) {
            case "up":
                state=state+1;
                return state;
            case "down":
                state=state-1;
                return state
        
            default:
                return state
        }
    }
    const [count,ditPatch] = useReducer(reducer,0);
    const tang=()=>{
        console.log("1111");    
        ditPatch("up");
    }

    const giam=()=>{
        ditPatch("down");
    }
  return (
    <>
    <div>UseReducer</div>
    <p>count : {count}</p>
    <button onClick={tang}>tăng</button>
    <button onClick={giam}>giảm</button>

    </>
  )
}
