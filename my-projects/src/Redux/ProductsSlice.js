import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetactProduct = createAsyncThunk("fetactProduct" , async() =>  {
   try {
    const response = await axios.get(`http://localhost:8000/product/products`);
        return response.data.data
    
   } catch (error) {
    console.log(error);
   }
})

export const addProduct = createAsyncThunk("addProduct" ,async ({productaddData,handleClose},{dispatch}) => {
    dispatch(startAddLoading());
   try {
    const response = await axios.post(`http://localhost:8000/product`,productaddData);
    console.log(response);
   if(response.status === 200){
    dispatch(fetactProduct());
      handleClose();
     
   }
   } catch (error) {
    dispatch(stopaddLoading());
    console.log(error);
    dispatch(addErrorMsg(error.response.data.message));
   }
})
export const deleteProduct = createAsyncThunk("deleteProduct" , async({id} , {dispatch}) => {
   try {
      const responde = await axios.delete(`http://localhost:8000/product/${id}`);
        if(responde.status === 200){
            console.log(responde.data);
            dispatch(fetactProduct());
        }
   } catch (error) {
    
   };
})
export const UpdateProductDetails = createAsyncThunk("UpdateProductDetails" ,async({id, formValue,handleditClose}, {dispatch}) => {
    try {
        const {_id, name, qty, category, price } = formValue;
        const id = _id;
        const Data = {
            name,
            category,
            price,
            qty
        }
      const responde = await axios.patch(`http://localhost:8000/product/${id}`, Data);
      if(responde.status === 200){
        fetactProduct();
        dispatch(handleditClose())
      }
        
    } catch (error) {
        
    }
})

 const ProductsSlice = createSlice({
    name : "product",
    initialState : {
        lodaing : false,
        productList : [],
        filterlist : [],
        addproductLoading :  false,
        error : ""
    },
    reducers : {
        startAddLoading : (state,action) => {
            state.addproductLoading = true
        },
        stopaddLoading : (state,action) => {
           state.addproductLoading = false;
        },
        addErrorMsg : (state,action) => {
            state.error = action.payload;
        },
        emptyErrorMsg : (state,action) => {
            state.error = "";
        },
        searchProduct: (state, action) => {
            const searchData = state.productList.filter((item) => item.name.toLowerCase().replace(" ", "").includes(action.payload.toLowerCase()))
            state.filterlist = searchData
        }
 
    },
    extraReducers : {
        [fetactProduct.pending] : (state, action) => {
            state.lodaing = true;
        },
        [fetactProduct.fulfilled] : (state,action) => {
            state.productList = action.payload.products;
            state.filterlist = action.payload.products;
            state.lodaing = false;
            
        },
        [fetactProduct.rejected] : (state,action) => {
            state.lodaing = false;
        }
    }
})
export const {startAddLoading,stopaddLoading,addErrorMsg,emptyErrorMsg,searchProduct} = ProductsSlice.actions;
export default ProductsSlice.reducer