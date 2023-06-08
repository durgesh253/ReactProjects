import { createSlice } from "@reduxjs/toolkit";

const cartinfoslice = createSlice({
    name : "cart",
    initialState :{
         totalitem : 20
    },
    reducers :{
        increment : (state , action) =>{
            console.log(action);
            state.totalitem = state.totalitem + Number(action.payload)
        },
        decrement : (state,action) =>{
            state.totalitem = state.totalitem - Number(action.payload)

        }

    }
})
export const {increment,decrement} = cartinfoslice.actions
export default cartinfoslice.reducer