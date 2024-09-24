import React, { useEffect } from 'react'
import { useState } from 'react'
import FoodData from '../data/FoodData' 

const Category = () => {
  const [category,setCategory] = useState([]);

  const listUniqueCategory = ()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=>food.category)),];
    setCategory(uniqueCategories);
    console.log(uniqueCategories)
  }

  useEffect(()=>{listUniqueCategory()},[]);
  return (
    <div className='mx-6'>
      <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-yellow-500 hover:text-white'>
            All
        </button>
        {
          category.map((category,idx)=>{
            return (<button key={idx} className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-yellow-500 hover:text-white'>
              {category}
          </button>)
          })
        }
      </div>
    </div>
  )
}

export default Category
