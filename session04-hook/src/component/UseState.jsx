import React, { useState } from 'react'

export default function UseState() {
    const [count,setCount] = useState(50);      // ở đây count sẽ = 50
    const [title,setTitle] = useState("hoa");
    const [job,setJob] = useState("");
    const [jobs,setJobs] = useState([]);


    /*      useState sẽ trả về 1 mảng có 2 phần tử
                . phần tử 1 : giá trị  khởi tạo
                . phần tử 2 : là 1 hàm xử lý.
            khi mà setCout() thì component tự động re-render, nên về phía UI tự động cập nhật giá trị.
    */

    // nắm chắc destructoring
    let arr=[1,"hoa"];
    let [a,b]=arr;
    const tang=()=>{
        console.log("1111");
        setCount(count+1);      // setCount ở đây gán lại count = count+1
        setTitle("hồng");       // setTitle ở đây gán lại title = "hồng"
    }

    const handleChange=(event)=>{
        let inputValue = event.target.value;        // lấy giá trị từ ô input
        setJob(inputValue);
    }
    const save=()=>{
        setJobs([...jobs,job]);     // thêm công việc vào mảng chứa.
        setJob([]);         // set lại job về 1 mảng rỗng, để khi bấm lưu thì ô input sẽ xóa rỗng
    }
    console.log("danh sách công việc: ", jobs);
  return (
    <>
        <div>UseState</div>
        <p>{count}</p>
        <p>{title}</p>
        <p>{job}</p>
        <button onClick={tang}>Tăng lên</button>
        <input 
            type="text" 
            onChange={handleChange}
            value={job}         // set lại value của ô input về ban đầu
        />
        <button onClick={save}>Lưu</button>
        <ul>
            {jobs.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>

        {/* Bài tập: tạo ô input nhập công việc, nhấn nút lưu sẽ hiển thị ở dưới giao diện.
            1. lấy giá trị ô input > dùng onChange={}
            2. lưu danh sách các công việc ở đâu.   dùng mảng []
         */}
    </>
    
  )
}
