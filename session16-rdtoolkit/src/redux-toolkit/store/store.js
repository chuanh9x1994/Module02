import { configureStore } from '@reduxjs/toolkit'
import count from "../reducers/count"
import todoList from '../reducers/todoList'

export const store = configureStore({
  reducer: {
    abc: count,
    todoList:todoList
  },
})