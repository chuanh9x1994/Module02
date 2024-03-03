import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./nhapcv.scss"

export default function NhapCv() {
    const [job, setJob] = useState("");
    const refHook = useRef(0);
    const data = useSelector((state) => {
        return state
    })

    let dispatch1 = useDispatch();
    const add = () => {
        dispatch1({
            type: "add",
            payload: {
                id: Math.floor(Math.random() * 10000),
                nameJob: job,
                status: false,
            }
        });
        setJob({ id: "", nameJob: "" });

    }

    const bamEnTer = (event) => {
        if (event.key === 'Enter') {
            dispatch1({
                type: "add",
                payload: {
                    id: Math.floor(Math.random() * 10000),
                    nameJob: job,
                    status: false,
                }
            });
            setJob({ id: "", nameJob: "" });
        }
    }
    useEffect(() => {
        refHook.current.focus();
    })

    const nhapCongViec = (event) => {
        setJob(event.target.value);
    }
    return (
        <div className='nhapCv'>
            <input
                className='nhapTenCv'
                type="text"
                placeholder='Nhập tên công việc'
                onChange={() => nhapCongViec(event)}
                value={job.nameJob}
                onKeyDown={bamEnTer}
                ref={refHook}
            />
            <button onClick={add} className='add'>Add</button>
        </div>
    )
}
