import React from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
const CartCount = ({onCartToggle ,  onClearCartItem ,totalQTY}) => {
  return (
    <>
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
      <div className='flex items-center gap-3'>
        <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
        </div>
        <div className='text-base font-medium text-slate-900'> 
            <h1>your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs '>{totalQTY} items</span></h1>
        </div>
      </div>
    </div>
    <div>
        <button type='button' className='flex items-center rounded bg-theme-cart active:scale-90 p-0.5' onClick = {onClearCartItem}>
            <XMarkIcon className='w-5 h-5 text-white stroke-[2]'/>
        </button>
    </div>
    </>
  )
}

export default CartCount
