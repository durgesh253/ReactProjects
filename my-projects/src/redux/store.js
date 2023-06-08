import { configureStore } from "@reduxjs/toolkit";
import Profileslice from "./profileslice";
import cartinfoslice from "./cartinfoslice";
import productslice from "./productslice";


export const store = configureStore({
    reducer : {
      
        profile : Profileslice,
        cart : cartinfoslice,
       product : productslice

    }
})