import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addJob: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.value += 1;
    state.push(action.payload)
    },
    delJob: (state,action) => {
      state.splice(action.payload,1)
    },
    updateJob: (state, action) => {
      state.splice(a, 1, c)
    },
  },
})
// cung cấp asyn-thunk để xử lý bất đồng bộ

// Action creators are generated for each case reducer function
export const { addJob, delJob, updateJob } = todoList.actions

export default todoList.reducer