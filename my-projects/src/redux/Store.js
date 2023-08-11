import { configureStore } from "@reduxjs/toolkit";
import { authslice } from "./AuthSlice";

export const store = configureStore({
    reducer: {
        auth : authslice,
    }
})