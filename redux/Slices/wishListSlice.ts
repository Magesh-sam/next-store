import { ProductProps } from "@/components/Product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [] as ProductProps[],
  isWishlistOpen: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductProps>) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
    },
    toggleCart: (state) => {
      state.isWishlistOpen = !state.isWishlistOpen;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
