import { createSlice } from "@reduxjs/toolkit";

const firstRedux = createSlice({
    name : "first",
    initialState : {
        items : 20
    },
reducers : {
     increment : (state,action) => {
         state.items = state.items + Number(action.payload)
     },
     decrement : (state,action) => {
        state.items = state.items -1
     }
}
})
export const {increment , decrement} = firstRedux.actions;
export default firstRedux.reducer;