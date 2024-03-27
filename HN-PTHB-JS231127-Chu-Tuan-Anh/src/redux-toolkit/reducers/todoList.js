import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("Jobs")) || [];


export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
      const sortNameJob = state.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      localStorage.setItem("Jobs", JSON.stringify(state));
    },
    deleteJob: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem("Jobs", JSON.stringify(state));
    },
    checkBoxJob: (state, action) => {
      state[action.payload].status = !state[action.payload].status;
      localStorage.setItem("Jobs", JSON.stringify(state));
    },
    arrangeJob: (state, action) => {
      console.log("abc", action.payload);
      if (action.payload == true) {
        const sortJob = state.sort((a, b) => {
          if (a.status === false && b.status === true) return -1;
          if (a.status === true && b.status === false) return 1;
          return 0;
        });

      } else {
        const sortNameJob = state.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
    },
  },
})

export const { addJob, deleteJob, checkBoxJob, arrangeJob } = todoList.actions

export default todoList.reducer