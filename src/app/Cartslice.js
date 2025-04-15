import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart") ?  JSON.parse(localStorage.getItem("cart")) : []

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
        state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      console.log("Payload:", action.payload);
    
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
    
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        console.log("Increased quantity:", state.cartItems[itemIndex]);
        toast.success('Item quantity updated successfully 📦')
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        console.log("Added new item:", temp);
        toast.success(`${action.payload.title} added! Happy shopping! 🎉`)
      }
      localStorage.setItem("cart",JSON.stringify(state.cartItems))
    }
    
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart } = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
