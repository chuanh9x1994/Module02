import React from 'react'
import { useState } from 'react'

export default function TaskList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        setTask([...task, newTask]);         // clone mảng task , thêm task mới vào mảng vừa clone.
        setNewTask("");                     // reset về rỗng
    }

    function handleChange(event) {
        setNewTask(event.target.value);     // lấy dữ liệu nhập vào từ input, đồng thời gán giá trị cho newTask
    }
    return (
        <>
            <div>TaskList</div>
            <label htmlFor="newTask">Nhập new task: </label>
            <input type="text" value={newTask} onChange={handleChange} id='newTask'/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {task.map((item, index) => {
                    return <li key={index}> {item} </li>
                })}
            </ul>
        </>
    )
}
