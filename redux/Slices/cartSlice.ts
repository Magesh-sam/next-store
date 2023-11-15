import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemAPIProps, CartItemProps, ProductProps } from "@/types/types";
const initialState = {
  cart: [] as CartItemAPIProps[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemAPIProps>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

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
