import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name:'cart',
    initialState:{
        Mycart:[],
    },
    reducer:{
        addToCart:(state,action)=>{
            // console.log(action.payload)
            state.Mycart.push(action.payload);
        }
    }
})

export const {addToCart} = cart.actions;
export default cart.reducer;