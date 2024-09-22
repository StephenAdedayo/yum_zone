import React from 'react'
import CartCard from '../components/CartCard'
import { useSelector } from 'react-redux'


const CartPage = () => {
 

  const {cartItems = [], total = 0} = useSelector(state => state.cart)


  return (
    <div>
      <div className='w-full text-center p-4 bg-primaryColor'>
        <p className='text-lg'>Cart List </p>
      </div>

     <div className='lg:px-20 px-5 my-20 flex flex-col md:flex-row gap-5'>

   <div className='flex-[60%] space-y-10 shadow-md p-4'>

    {cartItems.length === 0 ?  (
      <div>
        <p>Your Cart is Empty</p>
      </div>
    ) : (
      cartItems.map((cartItem, index) => (
      <CartCard key={index} cartItem = {cartItem}/>
      ))
    )}
   
   </div>


   <div className='flex-[40%] shadow-md p-5'>
    <p className='mb-5 font-semibold text-xl'>Order Summary</p>

    <div className='space-y-2'>
        
   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Item Price</p>
    <p className='text-[16px]'>$ {total?.toFixed(2)}</p>
   </div>

   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Variations</p>
    <p className='text-[16px]'>$ 0.00</p>
   </div>

   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Discount</p>
    <p className='text-[16px]'>$ 0.00</p>
   </div>

   <div className='flex justify-between items-center'>
    <p className='text-[16px]'>Add-ons</p>
    <p className='text-[16px]'>$ 0.00</p>
   </div>



    </div>


    <div className='mt-5 flex justify-between items-center'>
      <p className='text-[16px]'>Subtotal</p>
      <p className='text-[16px]'>$ {total?.toFixed(2)}</p>
    </div>

<button className='w-full mt-5 text-white bg-primaryColor px-6 py-3 rounded-md'>Confirm Delivery Details</button>

   </div>




     </div>


    </div>
  )
}

export default CartPage
