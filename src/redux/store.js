import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice";

const rootReducer = combineReducers({
    cartPage:cartReducer,
    menuPage:menuReducer
    
})

export const store = configureStore({
    reducer: rootReducer,
})

window.store = store;