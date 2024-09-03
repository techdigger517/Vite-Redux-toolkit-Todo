import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: v4(),
      text: "company interview",
      done: false,
    },
    {
      id: v4(),
      text: "meeting friend",
      done: true,
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: v4(), text: action.payload, done: false });
    },
    editTodo: (state, action) => {
      state.tasks = state.tasks.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    toggleDone: (state, action) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleDone } = todoSlice.actions;

export default todoSlice.reducer;
