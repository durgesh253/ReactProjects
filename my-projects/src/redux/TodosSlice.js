import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosa: [], // Changed the property name from 'todos' to 'todosa'
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todosa.push(action.payload); // Updated 'todos' to 'todosa'
    },
    removeToDo: (state, action) => {
      state.todosa = state.todosa.filter((todo) => todo.id !== action.payload); // Updated 'todos' to 'todosa'
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;
