import { configureStore } from "@reduxjs/toolkit";
import Profileslice from "./profileslice";
import cartinfoslice from "./cartinfoslice";
import productslice from "./productslice";
import listslice from "./listslice";


export const store = configureStore({
    reducer : {
      
        profile : Profileslice,
        cart : cartinfoslice,
       product : productslice,
       list : listslice

    }
})