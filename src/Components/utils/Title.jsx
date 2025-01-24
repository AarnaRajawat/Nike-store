import React from 'react'
import Item from './Item'

const Title = ({title}) => {
  return (
    <div className='grid items-center mt-11'>
       <h1 className='font-bold text-slate-900 text-5xl lg:text-4xl md:text-3xl drop-shadow-lg filter'>{title}</h1>
       <div>
        
       </div>
      
    </div>
  )
}

export default Title

