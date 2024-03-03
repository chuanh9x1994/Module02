import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {Provider} from "react-redux" 
import { store1 } from "./store/store.js"
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store1}>   {/* cung cấp store đã tạo cho toàn bộ app sử dụng */}
  <App />
</Provider>

)
