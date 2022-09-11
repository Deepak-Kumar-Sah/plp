import { configureStore } from "@reduxjs/toolkit";
import { addToCart } from "./Slices/Cart";


const store =configureStore({
    reducer:{
       addToMyCart:addToCart
    }
})
export default store;