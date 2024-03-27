import React from 'react'
import Title from './components/title/Title'
import ListJobs from './components/listJobs/ListJobs'
import Arrange from './components/arrange/Arrange'
import AddJob from './components/addJob/AddJob'
import "./app.scss"

export default function App() {
  return (
    <div className='main'>
      <Title></Title>
      <ListJobs></ListJobs>
      <Arrange></Arrange>
      <AddJob></AddJob>
    </div>
  )
}
