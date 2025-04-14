import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Cartslice';


const Store = configureStore({
  reducer: {
    cart: cartSlice, // 'cart' becomes the key in your Redux state
  },
});

export default Store;
