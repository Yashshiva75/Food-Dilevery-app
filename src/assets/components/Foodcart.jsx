import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../Redux/Slices/Cartslices';

const Foodcart = ({id,name,price,desc, img, rating,handletoast}) => {
  const dispatch = useDispatch();
  return (
    <div className='font-bold w-[280px] p-4 bg-gray-200 flex-col gap-2 rounded-xl'>
      <img src={img} alt="" className='w-auto h-[130px] hover:scale-110 cursor-grabbing transition-all duration-500 ease-in-out'/>
      <div className='text-lg flex justify-between'><h2>{name}</h2>
      <span className='text-green-500'>₹{price}</span>
      </div>
      <p>{desc.slice(0,50)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
        <IoStarSharp className='mr-1 text-yellow-500' />{rating}
        </span>
        <button onClick={()=>{
          dispatch(addtoCart({id,name,price,img,rating,price,qty:1}));
          handletoast(name);
        }} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-md transition-all ease-in-out'>Add to cart</button>
        
      </div>
    </div>
  ) 
}

export default Foodcart
