import { configureStore } from "@reduxjs/toolkit";
import FirstRedux from "./FirstRedux";
import ProductsSlice from "./ProductsSlice";


export const store = configureStore({
    reducer : {
        first : FirstRedux,
        product : ProductsSlice
      
    }
})