import React from 'react'
import Header from "./components/header/Header"
import ListProducts from "./components/listProducts/ListProducts"
import YourCart from './components/yourCart/YourCart'
import Notification from "./components/notification/Notification"
export default function App() {
  return (
    // <div>
    //   <Header></Header>
    //   <ListProducts></ListProducts>
    //   <YourCart></YourCart>
    //   <Notification></Notification>
    // </div>
    <div className="container">
      {/* header */}
      <Header></Header>
      <div className="row">
        {/* listProducts */}
        <ListProducts></ListProducts>
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            {/* yourcart */}
            <YourCart></YourCart>
            {/* Notify */}
            <Notification></Notification>
          </div>
        </div>
      </div>
    </div>

  )
}
