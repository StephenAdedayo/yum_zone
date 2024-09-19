import React from 'react'
import { CiHeart } from 'react-icons/ci'

const Products = ({filteredProducts}) => {

    // const {category, title, image, price } = filteredProducts || {}

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

        {filteredProducts.map(filtered => (
            <div className='shadow-md relative rounded-md p-2'>

                <div className='flex gap-2'>
                    <img src={filtered.image} alt="" />

                <div className='space-y-2'>
               <p>{filtered.category}</p>
               <p>{filtered.title}</p>
               <p>{filtered.price}</p>
                </div>
                </div>
         
         <div className='absolute bottom-2 right-2'>
            <CiHeart className=''/>
         </div>
            </div>
        ))}
      
    </div>
  )
}

export default Products
