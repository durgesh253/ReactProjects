import { configureStore } from "@reduxjs/toolkit";
import FirstSlice from "./FirstSlice";

export const storeData =configureStore({
    reducer:{
     counter:FirstSlice
    }
})