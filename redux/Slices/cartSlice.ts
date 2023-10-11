import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "@/types/types";
const initialState = {
  cart: [] as ProductProps[],
  isCartOpen: false,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      state.isCartOpen = false;
      state.cart.push(action.payload);
      state.isCartOpen = true;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
