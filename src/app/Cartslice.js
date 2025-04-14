import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItems: []
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
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        console.log("Added new item:", temp);
      }
    }
    
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart } = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState
export default cartSlice.reducer;
