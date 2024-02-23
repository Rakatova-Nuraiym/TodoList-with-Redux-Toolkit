import { configureStore } from "@reduxjs/toolkit";
import { Todo } from "./features/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: Todo,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
