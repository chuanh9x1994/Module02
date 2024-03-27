import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteJob, checkBoxJob } from '../../redux-toolkit/reducers/todoList';
import "./listJobs.scss"
export default function ListJobs() {
  const data = useSelector((state) => {
    return state
  })
  const disPatch = useDispatch();

  const delJob = (id) => {
    const indexJob = data.todoList.findIndex((item) => {
      return item.id == id;
    })
    const conf = confirm("bạn có muốn xóa hay không?")
    if (conf) {
      disPatch(deleteJob(indexJob));
    } else {
      return
    }
  }
  const checkBox = (id) => {
    const indexJob = data.todoList.findIndex((item) => {
      return item.id == id;
    })
    disPatch(checkBoxJob(indexJob));
  }
  return (
    <div>
      <div className='list-jobs'>
        {data.todoList.map((item, index) => {
          return <div key={index} className='job'>
            <div
              style={{ textDecoration: item.status == true ? "line-through" : "none" }}
              className='nameJob'
            >
              {item.name}
            </div>
            <input
              type="checkbox"
              onChange={() => checkBox(item.id)}
              checked={item.status}
            />
            <i className="fa-solid fa-trash" onClick={() => delJob(item.id)}></i>
            <i className="fa-solid fa-pen-to-square" ></i>
          </div>
        })}
      </div>
    </div>
  )
}
