import { createSlice } from "@reduxjs/toolkit";
import { stringify } from "postcss";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart") ?  JSON.parse(localStorage.getItem("cart")) : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0


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
    },
    setRemoveItemFromCart: (state, action) =>{

      const removeItem = state.cartItems.filter((item)=> item.id !== action.payload.id)
      state.cartItems = removeItem
      localStorage.setItem("cart",JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} Remove from cart`)

    },
   setIncreaseItemQty: (state, action) =>{
    const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

    if (itemIndex >= 0) {
      state.cartItems[itemIndex].cartQuantity += 1;
      toast.success('Item quantity Increased successfully 📦')
    }
    localStorage.setItem("cart",JSON.stringify(state.cartItems))

   },
   setDecreaseItemQty: (state, action) =>{
    const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

    if (state.cartItems[itemIndex].cartQuantity > 1) {
      state.cartItems[itemIndex].cartQuantity -= 1;
      toast.success('Item quantity decreased successfully 📦')
    }
    localStorage.setItem("cart",JSON.stringify(state.cartItems))
   },
   setClearCartItem: (state, action) =>{
    state.cartItems = []

    toast.success(`cart clear`);
    localStorage.setItem("cart",JSON.stringify(state.cartItems))
   },
   setGetTotals: (state, action) => {
    const totals = state.cartItems.reduce((cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const totalPrice = price * cartQuantity;
  
      cartTotal.totalAmount += totalPrice;
      cartTotal.totalQuantity += cartQuantity;
  
      return cartTotal;
    }, {
      totalAmount: 0,
      totalQuantity: 0,
    });
  
    state.cartTotalAmount = totals.totalAmount;
    state.cartTotalQuantity = totals.totalQuantity;
  }
  
   

    
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart,setRemoveItemFromCart,setIncreaseItemQty,setDecreaseItemQty,setClearCartItem,setGetTotals} = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cartTotalAmount;
export const selectTotalQuantity = (state) => state. cartTotalQuantity;
export default cartSlice.reducer;
