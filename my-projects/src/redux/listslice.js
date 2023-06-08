import { createSlice } from "@reduxjs/toolkit";

const listslice = createSlice({
    name : "list",
    initialState : {
        dataValue : []
    },
   reducers :{
    changeValue :(state , action) => {
        state.dataValue.push(action.payload)

    }


   }

})
export const {changeValue} = listslice.actions
export default listslice.reducer