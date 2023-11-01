import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "@/types/types";
const initialState = {
  cart: [] as ProductProps[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    // toggleCart: (state) => {
    //   state.isCartOpen = !state.isCartOpen;
    // },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
        return item;
      });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity === 1) return item;
          item.quantity -= 1;
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
