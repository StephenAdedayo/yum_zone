import React from 'react'
import { CiHeart } from 'react-icons/ci'

const Products = ({filteredProducts}) => {

    // const {category, title, image, price } = filteredProducts || {}

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>

        {filteredProducts.map(filtered => (
            <div className='shadow-md relative rounded-md p-2'>

                <div className='flex gap-2'>
                    <img className='size-[100px]' src={filtered.image} alt="" />

                <div className='space-y-1'>
               <p className='capitalize text-[14px]'>{filtered.category}</p>
               <p className='capitalize text-gray-400 text-[14px]'>{filtered.title}</p>
               <p className='capitalize text-[14px]'>${filtered.price?.toFixed(2)}</p>
                </div>
                </div>
         
         <div className='absolute bottom-2 right-2'>
            <CiHeart className='text-2xl'/>
         </div>
            </div>
        ))}
      
    </div>
  )
}

export default Products
