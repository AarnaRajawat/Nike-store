import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import React from 'react'



const Item = ({ifExists,id,title,text,rating,btn, img,price,color,shadow}) => {
    console.log(id)
  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists ? 'justify-items-start':'justify-items-center'} mt-11 rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
        
            <div className='grid items-center justify-items-center'>
                <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
                <p className='text-slate-200  filter drop-shadow text-base md:text-sm font-normal'>{text}</p>
            </div>
            <div className={`flex-item-center ${ifExists ? 'justify-items-start':'justify-items-center'} justify-between w-28 my-2`}>
            <div className='flex-item-center bg-white w-10 rounded '>
              <h1 className='text-black text-sm font-medium p-0'>${price}</h1>
              </div>
              <div className='flex-item-center gap-1'><StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4'/>
              <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1></div>
            </div>
            <div className="flex items-center gap-3">
  <button type="button" className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200" >
      <ShoppingBagIcon className="icon-style text-slate-900" />
  </button>
  <button type="button" className="bg-white opacity-90 button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">{btn}</button>
  </div>
<div className={` transition-theme hover:-rotate-12 ${ifExists ? 'absolute top-5 right-1':'justify-items-center'} `}>
  <img src={img} alt={`img/item-img/${id}`} className={`h-auto w-64 ${ifExists ?'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]':'h-36 w-64' }`}/></div></div>)}

export default Item
