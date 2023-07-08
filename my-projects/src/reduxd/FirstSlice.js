import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getproductData = createAsyncThunk('fetachDataproducts', async () => {
       try {
      const respone = await axios.get(`https://api.pujakaitem.com/api/products`)
        console.log(respone);
        return respone.data
       } catch (error) {
        
       }
})

export const getproductDetails = createAsyncThunk('fetchproductDetails', async (id) => {
  try {
    const response = await axios.get(`https://api.pujakaitem.com/api/products?id=${id}`)
    return response.data
    
  } catch (error) {
    
  }
})
const initialState = {
    value: 0,
    productData:[],
    loading:true,
    futureProducts:[],
    productDetails:[],
  }

export const FirstSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
     
  
    },
    extraReducers:{
      [getproductData.pending]: (state,action) => {
        state.loading = true
      },
      [getproductData.fulfilled]: (state,action) => {
        state.productData = action.payload
        state.loading = false
        state.futureProducts = action.payload.filter((curElem) => {
          return curElem.featured === true;
        })
      },
      [getproductData.rejected]: (state,action) =>{
        state.loading = false
      },
      [getproductDetails.pending] : (state,action) => {
           state.loading = true
      },
      [getproductDetails.fulfilled] : (state,action) => {
        state.loading = false
        state.productDetails = action.payload
      },
      [getproductDetails.rejected] : (state,action) => {
        state.loading = false
      }

    }
   

})
export const { increment, decrement, incrementByAmount,feutureproductDetails } = FirstSlice.actions

export default FirstSlice.reducer