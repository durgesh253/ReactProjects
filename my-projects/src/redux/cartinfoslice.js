import { createSlice } from "@reduxjs/toolkit";

const cartinfoslice = createSlice({
    name : "cart",
    initialState :{
         totalitem : 20
    },
    reducers :{
        increment : (state) =>{
            state.totalitem = state.totalitem + 1
        },
        decrement : (state) =>{
            state.totalitem = state.totalitem - 1

        }

    }
})
export const {increment,decrement} = cartinfoslice.actions
export default cartinfoslice.reducer