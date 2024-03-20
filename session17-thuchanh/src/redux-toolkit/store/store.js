import { configureStore } from '@reduxjs/toolkit'
import todoList from '../reducers/todoList'

export const store = configureStore({
  reducer: {
    todoList: todoList,
  },
})