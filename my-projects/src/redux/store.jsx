import { configureStore } from "@reduxjs/toolkit";
import { dataProduct } from "./DataProduct";

export const store = configureStore({
    reducer:{
        list:dataProduct
    }
})