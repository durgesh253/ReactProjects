import { configureStore } from "@reduxjs/toolkit";
import ThemSlice from "./ThemSlice";

export const store =  configureStore({
    reducer:{
        them:ThemSlice,
    }
})