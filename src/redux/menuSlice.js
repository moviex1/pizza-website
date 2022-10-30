import { createSlice } from "@reduxjs/toolkit";
import { pizzaData } from "../data/pizzaData";


const menuSlice = createSlice({
    name:"menu",
    initialState:{
        pizzaList: [...pizzaData],
    },
    reducers:{
        changeSize(state, {payload}){  
            state.pizzaList = state.pizzaList.map(item =>{
            if(item.id === payload.id){
                item.currentSize = payload.value;
            }
            return item;
           })
           ;    
        }
    }
}) 


export default menuSlice.reducer;

export const {changeSize} = menuSlice.actions;