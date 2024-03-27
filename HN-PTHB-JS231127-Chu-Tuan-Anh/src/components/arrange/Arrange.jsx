import React, { useState } from 'react'
import "./arrange.scss"
import { useDispatch, useSelector } from 'react-redux'
import { arrangeJob } from "../../redux-toolkit/reducers/todoList"


export default function Arrange() {
  const [check, setCheck] = useState(false);
  const data = useSelector((state) => {
    return state
  })
  const disPatch = useDispatch();
  const sort = () => {
    setCheck(!check)
    disPatch(arrangeJob(!check));
    console.log("dataa", data);
  }
  console.log("checkkk", check);

  return (
    <div className='arrange'>
      <div className='content'>Move done items at the end?</div>
      <div>
        <label className="switch">
          <input
            type="checkbox"
            id="toggleSwitch"
            onChange={sort}
            checked={check}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}
