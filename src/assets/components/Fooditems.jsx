import React from 'react'
import Foodcart from './Foodcart'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';

const Fooditems = () => {
  const handletoast = (name)=>{
    toast.success(`${name}Added to cart`)
  }
  return (
    <><Toaster
    position="top-center"
    reverseOrder={false}
  />
    <div className='flex flex-wrap gap-3 justify-center mx-6 my-10'>
      {FoodData.map((food)=>{
          return<Foodcart key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img={food.img}
          handletoast={handletoast}/>
      })}
      
    </div>
    </>
  )
}

export default Fooditems
