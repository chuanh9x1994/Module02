import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { giamxuong, tangLen } from './redux-toolkit/reducers/count';
import todoList, { addJob, delJob, updateJob } from './redux-toolkit/reducers/todoList';
import { useState } from 'react';

export default function App() {
  const data = useSelector((state)=>{
    // console.log("1111",state);
    return state
  })
  const disPatch = useDispatch();
  const tang=()=>{
    // console.log("đã ăn vào hàm");
    disPatch(tangLen())
  }
  const giam=()=>{
    disPatch(giamxuong())
  }

  const [newJob,setNewJob] = useState({
    id: "",
    nameJob: ""
  });
  const nhapTenJob=(e)=>{
    let tenJob = e.target.value;
    setNewJob({...newJob,id:Math.floor(Math.random()*1000),nameJob:tenJob});
  }
  let check = -1;
  const addNewJob=()=>{
    if(check = -1){
      disPatch(addJob(newJob));
      setNewJob({...newJob,nameJob:""})
    } else {
      disPatch(updateJob(check))
      setNewJob({...newJob,nameJob:""});
    }
  }
  console.log("111222",data);
  const updJob=(id)=>{
    let JobX = data.todoList.find((item)=>{
      return item.id == id
    })
    check = data.todoList.indexOf(JobX);
    console.log("check",check);
    setNewJob({...newJob,nameJob:JobX.nameJob});
  }

  const deleJob=(id)=>{
    let indexJob = data.todoList.findIndex((item)=>{
      return item.id == id
    })
    console.log("indexJob",indexJob);
    const conf = confirm("bạn có muốn xóa không?");
    if(conf){
      disPatch(delJob(indexJob))
    } else {
      return
    }
  }
  return (
    <div>
      REDUX TOOLKIT
    <p> giá trị count: {data.abc.value} </p>
    <button onClick={tang}>tăng</button>
    <button onClick={giam}>giảm</button><br />
    -------------
    <br />
    <h1>TodoList</h1>
    <input 
      placeholder='Nhập công việc'
      onChange={()=>nhapTenJob(event)}
      value={newJob.nameJob}
    /><br />
    <button onClick={addNewJob}>Add Job</button>
    <p>list công việc : 
        <ul>
            {data.todoList.map((item)=>{
              return <li>{item.nameJob}
                <button onClick={()=>updJob(item.id)}>Update</button>
                <button onClick={()=>deleJob(item.id)}>delete</button>
              </li>
            })}
        </ul>
    </p>
    </div>
  )
}
