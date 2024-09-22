import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { increase, decrease, remove } from '../redux/slice/CartSlice'


const CartCard = ({cartItem}) => {

  const {id, image, price, title, category, amount = 0 } = cartItem || {}
  const dispatch = useDispatch()

  return (
    <div>
      <div className='shadow-md flex relative justify-between rounded-md p-2'>


<div className='flex relative gap-2'>
    <img className='size-[100px]' src={image} alt="" />

<div className='space-y-1'>
<p className='capitalize text-[14px]'>{title}</p>
<p className='capitalize text-gray-400 text-[14px]'>{category}</p>
<p className='capitalize text-[14px]'> ${price?.toFixed(2)}</p>
</div>
</div>

<div className='flex gap-2'>
    <div onClick={() => dispatch(decrease({id}))} className='cursor-pointer bg-primaryColor grid place-content-center size-[30px] rounded-full'>
    <p className=' text-white text-xl'>-</p>
    </div>

    
    <p className=' text-xl'>{amount}</p>
    

    <div onClick={() => dispatch(increase({id}))}  className='cursor-pointer bg-primaryColor grid place-content-center size-[30px] rounded-full'>
    <p className=' text-white text-xl'>+</p>
    </div>


</div>


<div className='absolute bottom-2 right-2 cursor-pointer'>
<FaTrash onClick={() => dispatch(remove({id}))} className='text-red-500 text-lg'/>
</div>
</div>



    </div>
  )
}

export default CartCard
