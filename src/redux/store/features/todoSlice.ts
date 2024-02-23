import { createSlice } from "@reduxjs/toolkit";
import { TodoList } from "../../../types";

const initialState: TodoList = {
  todo: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const newData = {
        id: Math.random(),
        title: actions.payload.title,
        level: actions.payload.level,
        age: actions.payload.age,
        isCompleted: false,
      };
      state.todo.push(newData);
    },
    deleteAll: (state) => {
      state.todo = [];
    },
    deleteOne: (state, actions) => {
      state.todo = state.todo.filter((item) => item.id !== actions.payload.id);
    },
    Edit: (state, actions) => {
      const filterIndex = state.todo.findIndex(
        (item) => item.id === actions.payload.id
      );
      const newData = {
        id: actions.payload.id,
        title: actions.payload.title,
        level: actions.payload.level,
        age: actions.payload.age,
        isCompleted: actions.payload.isCompleted,
      };
      state.todo.splice(filterIndex, 1, newData);
    },
    competed: (state, actions) => {
      const findIndex = state.todo.findIndex(
        (item) => item.id === actions.payload.id
      );
      const newUpdata = {
        ...actions.payload.item,
        isCompleted: !actions.payload.item.isCompleted,
      };
      state.todo.splice(findIndex, 1, newUpdata);
    },
  },
});

export const Todo = TodoSlice.reducer;
export const { addTodo, deleteAll, deleteOne, Edit, competed } =
  TodoSlice.actions;
