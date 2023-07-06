import { configureStore } from "@reduxjs/toolkit";
import DataFetchingSLice from "./DataFetchingSlice";


export const store = configureStore({
    reducer:{
        list: DataFetchingSLice
    }
})