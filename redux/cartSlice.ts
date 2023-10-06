import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "@/components/Product";

const initialState = {
  cart: [] as ProductProps[],
  wishlist: [] as ProductProps[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      state.cart.push(action.payload);
      alert(`Added ${action.payload.title} to cart`);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToWishlist: (state, action: PayloadAction<ProductProps>) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } =
  cartSlice.actions;

export default cartSlice.reducer;
