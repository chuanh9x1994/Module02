import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addJob } from '../../redux-toolkit/reducers/todoList'
import "./addJob.scss"
export default function AddJob() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [job, setJob] = useState({
    name: "",
    id: "",
    status: false,
  })
  const data = useSelector((state) => {
    console.log("stateee", state);
    return state
  })
  const nhapJob = (e) => {
    setJob({
      name: e.target.value,
      id: Math.floor(Math.random() * 1000),
      status: false,
    })
  }
  const disPatch = useDispatch();
  const add = () => {
    disPatch(addJob(job));
    setJob({ ...job, name: "" })
  }
  const enTer = (event) => {
    if (event.key == "Enter") {
      disPatch(addJob(job));
      setJob({ ...job, name: "" })
    }
  }
  return (
    <div className='add-job'>
      <p className='content'>Add to the todo list</p>
      <input
        type="text"
        placeholder='Mời nhập công việc'
        onChange={() => { nhapJob(event) }}
        value={job.name}
        onKeyDown={enTer}
        ref={inputRef}
      />
      <button onClick={add}>ADD ITEM</button>
    </div>
  )
}
