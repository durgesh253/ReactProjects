import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import authintiSlice from "./authintiSlice";

export const store =configureStore({
    reducer : {
        cocktail : cocktailSlice,
         auth : authintiSlice

    }
})