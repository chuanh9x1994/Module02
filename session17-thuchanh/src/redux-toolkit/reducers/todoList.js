import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("jobs")) || [];

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addJob: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
      localStorage.setItem("jobs",JSON.stringify(state));
    },
    deleteJob: (state,action) => {
      state.splice(action.payload,1);
      localStorage.setItem("jobs",JSON.stringify(state));
    },
    checkBoxx: (state, action) => {
        state[action.payload].status = !state[action.payload].status;
        localStorage.setItem("jobs",JSON.stringify(state));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addJob, deleteJob, checkBoxx } = todoList.actions

export default todoList.reducer