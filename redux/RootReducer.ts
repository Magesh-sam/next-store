import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import wishlistReducer from "./Slices/wishListSlice";

export const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});
