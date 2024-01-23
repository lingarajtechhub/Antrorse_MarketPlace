import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) ?? [],
};

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;

      //check if product exists
      const itemExist = state.wishlistItems.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      console.log(state.wishlistItems );

      if (itemExist) {
        console.log("Item already exists in the cart");
      } else {
        state.wishlistItems = [...state.wishlistItems, product];
        console.log("Item added to the cart");
        localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      }
    },
    removeFromWishlist(state, action) {
      const product = action.payload;
      const itemRemove = state.wishlistItems.filter(
        (item) => item.id !== product.id
      );
      state.wishlistItems = itemRemove;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
