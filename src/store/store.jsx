import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../redux/features/Cart/CartSlice";
import wishlistReducer from "../redux/features/Wishlist/WishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
