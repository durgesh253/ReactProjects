import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./TodosSlice";

export const store = configureStore({
    reducer:{
         todos:TodosSlice,
    }
})