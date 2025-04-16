import React, { useSyncExternalStore ,useEffect } from 'react'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import { useDispatch, useSelector  } from "react-redux";
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQuantity, setClearCartItem, setCloseCart, setGetTotals } from '../app/Cartslice';



const Cart = () => {

  const ifCartState = useSelector(selectCartState)

  const dispatch = useDispatch();

  const onClearCartItem = () =>{
    dispatch(setClearCartItem())
  }

  const cartItems = useSelector(selectCartItems)
  const totalAmount =  useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQuantity)
  console.log(cartItems)

  useEffect(() => {
    dispatch(setGetTotals())

  },[cartItems, dispatch])
  
      const onCartToggle = () => {
  
          dispatch(setCloseCart({
              cartState: false
          }))
  
      }
  return (
    <div className= {`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-250 z-[200] ${ifCartState ?'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8' }`}>
     <div className= {`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle} onClearCartItem = {onClearCartItem} totalQTY ={totalQTY}/>

        {cartItems.length === 0 ? <CartEmpty onCartToggle={onCartToggle}/>: <div>
          <div className='flex items-start justify-start flex-col gap-y-7 h-[81vh] lg:gap-y-5 overflow-y-scroll  scroll-smooth scroll-hidden py-3'>
            {
              cartItems?.map((item, i) =>(
                <CartItem  key={i} item={item}/>
              )) }
          </div>
          <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
      <div className='flex items-center justify-between'>
        <h1 className='text-base font-semibold uppercase'>subTotal</h1>
        <h1 className='text-sm rounded bg-theme-cart px-1 py-0.5 text-slate-100'>${totalAmount}</h1>
      </div>
      <div className='grid items-center gap-2'>
        <p className='text-sm font-medium text-center'>Taxes and Shipping will Calculate At Shopping</p>
        <button type="button" className='button-theme bg-theme-cart text-white'>Check Out</button>
      </div>
     </div>
        </div> }
       
      
     </div>
     
    </div>
  )
}

export default Cart
