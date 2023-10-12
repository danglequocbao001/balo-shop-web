import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartItem:[]
}
const cartSlice=createSlice(
    {
        name:"cart"
    }
)