import React, { useState } from 'react'


    {/* 
        bài tập todolist : thêm, sửa, xóa công việc.
          Các bước làm: 
            - Bước 1: tạo mảng lưu công việc.
            - Bước 2: Tạo và lấy giá trị của ô input.
            - Bước 3: Đưa các giá trị của ô input vào mảng.
            - Bước 4: Dùng map() để render giá trị của mảng chứa danh sách công việc.
            - Bước 5: thêm các button để thêm, sủa, xóa các công việc.
      
    */}
export default function TodoList() {
    const [job,setJob] = useState({id:"" , name:""})
    const [jobs,setJobs] = useState([]);
    const [check, setCheck] = useState(-1);

    const cv=(event)=>{
        setJob({...job,id:Math.floor(Math.random()*10000), name:event.target.value});
    }

    const add=()=>{
        if(check == -1){
            setJobs([...jobs,job]);
            setJob({id:"", name:""});
        } else {
            const index = jobs.findIndex((item,index)=>{
                return item.id == check;
            })
            jobs.splice(index,1,job);
            setJobs([...jobs]);
            setCheck(-1);
            setJob({id:"", name:""});
        }
    }

    const deleteJob=(id)=>{
        let checkDel=confirm("bạn có muốn xóa hay không?");
        if(checkDel){
            const index = jobs.findIndex((item,index)=>{
                return item.id==id;
            })
            jobs.splice(index,1);
            setJobs([...jobs]);
        }
    }

    const updateJob=(id)=>{
        const index = jobs.findIndex((item,index)=>{
            return item.id==id;
        })
        setJob({...job, id:id , name : jobs[index].name});
        setCheck(id);
    }
    return (
        <>
            <div>TodoList</div>
            <label htmlFor="job">Nhập công việc: </label>
            <input 
                type="text" 
                onChange={cv} 
                id='job'
                value={job.name}
            /> <br />
            <button onClick={add}>{check==-1 ? "Thêm":"Sửa"}</button>
            <p>Danh sách Công việc: </p>
            <ul>
                {jobs.map((item,index)=>{
                    return <li key={item.id}>{item.name} 
                        <span className="material-symbols-outlined" onClick={()=>deleteJob(item.id)}>
                            delete
                        </span>
                        <span className="material-symbols-outlined" onClick={()=>updateJob(item.id)}>
                            border_color
                        </span>
                    </li>
                })}
            </ul>
        </>
    )
}
