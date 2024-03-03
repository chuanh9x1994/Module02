import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./hienthicv.scss"

export default function HienThiCv() {
  const data = useSelector((state)=>{
    // console.log("4444",state);
    return state
  })
  let checkId = -1;
  const dispatch12 = useDispatch();
  const checkBox=(id)=>{
    checkId=id;
    // console.log("id = ",checkId);
    const jobX = data.addJob.find((item,id)=>{
      return item.id == checkId;
    })
    // console.log("abc",jobX);
    jobX.status=!jobX.status;
    localStorage.setItem("dataJob",JSON.stringify(data.addJob));
    // console.log("data",data);
    dispatch12({
      type:"add12"
    })
  }

  const del=(id)=>{
    let checkDelete = confirm("Bạn có muốn xóa công việc không?");
    checkId = id;
    const jobY = data.addJob.find((item,id)=>{
      return item.id == checkId;
    })
    const indexJobY = data.addJob.indexOf(jobY);
    // console.log("vị trí của phần tử: ",indexJobY);
    if (checkDelete) {
      data.addJob.splice(indexJobY,1)
    }else{
      return
    }
    localStorage.setItem("dataJob",JSON.stringify(data.addJob));
    dispatch12({
      type:"add12"
    })
    dispatch12({
      type:"del"
    })
  }
  return (
    <div className='render'>
        <ul className='listCv'>
          {
            (data.countJob == 0) ? <p className='text'>Chưa có công việc</p> : data.addJob.map((item,id)=>{
              return <li key={item.id}> 
                        <div className='congViec'>
                          <input type="checkbox" onChange={()=>checkBox(item.id)} checked={item.status}/>
                          <div style={{textDecoration: item.status==true ? "line-through" : "none"}} className='tenCv'>
                            {item.nameJob}
                          </div>  
                          <button onClick={()=>del(item.id)} className='del'>Delete</button>
                        </div>
                    </li>
                    
                
            })
          }
            
        </ul>
    
    </div>
  )
}
