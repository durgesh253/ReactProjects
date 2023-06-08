import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
    name : "product",
    initialState : {
        peoducts : [],
        loading : false,
        productDetails : {}
    }
})

export default productslice.reducer