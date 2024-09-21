import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'


const CartCard = () => {
  return (
    <div>
      <div className='shadow-md flex relative justify-between rounded-md p-2'>


<div className='flex relative gap-2'>
    <img className='size-[100px]' src='' alt="" />

<div className='space-y-1'>
<p className='capitalize text-[14px]'></p>
<p className='capitalize text-gray-400 text-[14px]'></p>
<p className='capitalize text-[14px]'></p>
</div>
</div>

<div className='flex gap-2'>
    <div className=' bg-primaryColor grid place-content-center size-[30px] rounded-full'>
    <p className=' text-white text-xl'>-</p>
    </div>

    <div className=' bg-primaryColor grid place-content-center size-[30px] rounded-full'>
    <p className=' text-white text-xl'>0</p>
    </div>

    <div className=' bg-primaryColor grid place-content-center size-[30px] rounded-full'>
    <p className=' text-white text-xl'>+</p>
    </div>


</div>


<div className='absolute bottom-2 right-2'>
<FaTrash className='text-red-500 text-lg'/>
</div>
</div>



    </div>
  )
}

export default CartCard
