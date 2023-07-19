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
  productData: [],
  searchData: [],
  loading: true,
  futureProducts: [],
  productDetails: [],
  grid_view: true,
  selectedCategory: '',
};


export const FirstSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     setSearchData : (state,action) => {
         state.searchData = []
         state.searchData.push(action.payload)

     },
      setGridView: (state) => {
        state.grid_view = true;
      },
      setListView: (state) => {
        state.grid_view = false;
      },
      filterByCategory: (state, action) => {
        const category = action.payload;
        state.selectedCategory = category;
        if (category === '') {
          state.productData = state.searchData;
        } else {
          state.productData = state.searchData.filter(
            (product) => product.category === category
          );
        }
      },
      filterCompany : (state,action) => {
        const company = action.payload;
        state.selectedCompany = company;
        if (company === '') {
          state.productData = state.searchData;
        } else {
          state.productData = state.searchData.filter(
            (product) => product.company === company
          );
        }
      }
      
   
  
    },
    extraReducers:{
      [getproductData.pending]: (state,action) => {
        state.loading = true
      },
      [getproductData.fulfilled]: (state,action) => {
        state.productData = action.payload
        state.searchData = action.payload
        state.futureProducts = action.payload.filter((curElem) => {
          return curElem.featured === true;
          state.loading = false
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
export const { feutureproductDetails,setGridView,setListView,setSearchData,filterByCategory,filterCompany} = FirstSlice.actions

export default FirstSlice.reducer