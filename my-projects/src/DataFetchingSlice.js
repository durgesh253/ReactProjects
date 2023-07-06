import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData =  async() =>{
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
       return response.products
    } catch (error) {
        
    }
}


const DataFetchingSlice = createSlice({
    name:"list",
    initialState:{
        edata:[],
        loading:true
    },
   reducers:{

   },extraReducers:{
    [fetchData.pending] : (state ,action) => {
        state.loading = true;
    },
    [fetchData.fulfilled] : (state , action) => {
        state.edata = action.payload.products
        state.loading = false

    },
    [fetchData.rejected] : (state , action) => {
        state.loading = false

    }
   }
   
    })
export default DataFetchingSlice.reducer