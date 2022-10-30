import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name:"cart",
    initialState: { 
        orderList:[],
        orderSum: 0,
    },
    reducers:{
        addToCart(state, action){
            state.orderList.push(action.item); 
        },

    }
})
 
export default cartSlice.reducer;

export const {addToCart} = cartSlice.actions;


