import React from 'react'
import CartCard from '../components/CartCard'

const CartPage = () => {
  return (
    <div>
      <div className='w-full text-center p-4 bg-primaryColor'>
        <p className='text-lg'>Cart List </p>
      </div>

     <div className='lg:px-20 px-5 my-20 flex flex-col md:flex-row gap-5'>

   <div className='flex-[60%] shadow-md p-4'>
   <CartCard/>
   </div>


   <div className='flex-[40%] shadow-md p-5'>
    <p className='mb-5 font-semibold text-xl'>Order Summary</p>

    <div className='space-y-2'>
        
   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Item Price</p>
    <p className='text-[16px]'>$ 95.00</p>
   </div>

   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Variations</p>
    <p className='text-[16px]'>$ 95.00</p>
   </div>

   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Discount</p>
    <p className='text-[16px]'>$ 95.00</p>
   </div>

   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Add-ons</p>
    <p className='text-[16px]'>$ 95.00</p>
   </div>



    </div>

<button className='w-full mt-5 text-white bg-primaryColor px-6 py-3 rounded-md'>Confirm Delivery Details</button>

   </div>




     </div>


    </div>
  )
}

export default CartPage
