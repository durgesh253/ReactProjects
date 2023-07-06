import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetails =  async () => {
try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.products;
} catch (error) {
    
}
}

export const dataProduct = createSlice({
    name:"list",
    initialState:{
      productlist:[],
      loading:true
    },
    reducers:{

    },
    extraReducers:{
        [getDetails.pending]:(state,action) => {
            state.loading = true
        },
        [getDetails.fulfilled]:(state,action) =>{
            state.productlist = action.payload
            state.loading = false
        },
        [getDetails.rejected]:(state,action) => {
            state.loading = false
        }
    }
})
export default dataProduct.reducer