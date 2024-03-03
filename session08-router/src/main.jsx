import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // import BrowserRouter vào
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>     {/* bọc BrowserRouter vào App để toàn bộ ứng dụng có thể sử dụng được cơ chế định tuyến. */}
    <App />
  </BrowserRouter>,
)
