import { configureStore } from "@reduxjs/toolkit";
import FirstSlice from "./FirstSlice";
import CartSlice from "./CartSlice";
import LoginSlice from "./LoginSlice";






export const storeData =configureStore({
    reducer:{
     counter:FirstSlice,
      cart:CartSlice,
    log:LoginSlice,
    
    }
})