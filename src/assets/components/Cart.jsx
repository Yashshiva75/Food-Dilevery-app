import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";


const Cart = () => {
  const [isActive, setIsActive] = useState(true); // Initialize isActive to true
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty,0) 
  const totalPrice = cartItems.reduce((total,item)=> total+item.qty * item.price,0)

  const handleClose = () => {
    setIsActive(false); // Set isActive to false when the close icon is clicked
  };

  return (
    <>
    <div className={`h-full fixed right-0 top-0 w-full lg:w-[20vw] bg-white mt-3 ${isActive ? '' : 'translate-x-full'} transition-all duration-500 z-50`}>
      <div className='flex justify-between text-xl text-green-300 font-bold'>
        <span>My order</span>
        <IoIosCloseCircle onClick={handleClose} className='hover:text-red-400' />
      </div>
      {isActive && ( 
        <>
          
          {cartItems.map((food)=>{
            return <Itemcard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
          })}
          <div className='absolute bottom-0'>
            <h3 className='font-semibold'>Items : {totalQty}</h3>
            <h3 className='w-[90px] '>Total amount: {totalPrice}</h3>
            <hr />
            <button className='bg-green-400 font-bold py-1 text-white px-3 rounded-lg w-[90vw] lg:w-[18vw]'>Checkout</button>
          </div>
          
        </>
        
      )}
    </div>
    <FaCartArrowDown onClick={()=>{setIsActive(!isActive)}} className={`fixed cursor-pointer p-3 text-5xl bottom-10 right-4 hover:text-6xl transition-all ease-in-out ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>

    </>
  );
};

export default Cart;