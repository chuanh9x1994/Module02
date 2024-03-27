import React from 'react'
import "./title.scss"

export default function Title() {
  return (
    <div>
      <div className='title'>
        <p className='todo-list'>Todo List</p>
        <p className='content'>Get things done, one item at a time</p>
        <hr />
      </div>
    </div>
  )
}
