import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";

export const store =configureStore({
    reducer : {
        cocktail : cocktailSlice

    }
})