import React from 'react'
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removefromcart } from '../../Redux/Slices/Cartslices';
import { incrementQty,decrementQty } from '../../Redux/Slices/Cartslices';
import Cart from './Cart';
import toast from 'react-hot-toast';


const Itemcard = ({id,name,qty,price,img}) => {
  const dispatch = useDispatch();
  return (
    <>
    <div className='flex gap-2 shadow-md mt-3 mb-3'>
    <MdDelete onClick={()=>{dispatch(removefromcart({id,name,qty,price,img}))
         toast(`${name} Item Removed`, {
          icon: '🚫!',
        })}} className='absolute right-7 text-gray-600 cursor-pointer hover:text-red-500'/>
    <div >
      <img className='w-[50px] h-[50px]' src={img} alt="image" />
    </div>
      <h2 className='font-bold text-gray-600'>{name}</h2>
      <div>
        <span>₹{price}</span>
        <div className='flex gap-2 -ml-20'>
        <FaPlusCircle onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              } className='text-green-500 hover:text-red-400 cursor-pointer'/>
      <span>
        {qty}
      </span>
       <FaMinusCircle onClick={() =>
                qty >= 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              } className='text-green-500 hover:text-red-400 cursor-pointer'/>
       </div>
      </div>
    </div>
    </>
  )
}

export default Itemcard
