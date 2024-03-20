import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addJob, checkBoxx, deleteJob } from './redux-toolkit/reducers/todoList';

export default function App() {
  // const [jobs,setJobs] = useState([]);
  const [job,setJob] = useState({
    name:"",
    id:"",
    status:false
  })
  const data = useSelector((state)=>{
    console.log("stateee",state);
    return state
  })
  const nhapJob = (e)=>{
    setJob({
      name:e.target.value,
      id:Math.floor(Math.random()*10000),
      status: false
    })
  }
  const disPatch=useDispatch();
  const add = ()=>{
    disPatch(addJob(job))
    setJob({...job,name:""})
  }
  const delJob = (id) =>{
    const indexJob = data.todoList.findIndex((item)=>{
      return item.id == id
    })
    console.log("idđ", indexJob);
    const conf = confirm("bạn có muốn xóa hay không ?");
    if(conf){
      disPatch(deleteJob(indexJob));
    }
    else return
  }

  const checkBox = (id)=>{
    const indexJob = data.todoList.findIndex((item)=>{
      return item.id == id;
    })
    console.log("indexJob",indexJob);
    disPatch(checkBoxx(indexJob));
  }
  return (
    <div>
      <div>
        <h1>TodoList</h1>
        <p>Get things does, one item at a time.</p>
        <hr />
      </div>
      <div>
        <h3>Add to the todo list</h3>
        <input 
          type="text" 
          name=""
          onChange={()=>{nhapJob(event)}}
          value={job.name}
        />
        <button onClick={add}>Add</button>
      </div>
        <div>
          <ul>
            {data.todoList.map((item,index)=>{
              return <li key={index}>
                <div style={{textDecoration : item.status == true ? "line-through" : "none"}}>
                  {item.name}
                </div>
                <input 
                  type="checkbox"
                  onChange={()=>checkBox(item.id)}
                  checked={item.status}
                />
                <button onClick={()=>delJob(item.id)}>Delete</button>
              </li>
            })}
          </ul>
        </div>
    </div>
  )
}
