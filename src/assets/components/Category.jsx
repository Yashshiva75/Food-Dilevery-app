import React, { useEffect } from 'react'
import { useState } from 'react'
import FoodData from '../data/FoodData' 
import { useDispatch,useSelector } from 'react-redux';
import { setCategory } from '../../Redux/Slices/CategorySlice';

const Category = () => {
  const [categories,setCategories] = useState([]);

  const listUniqueCategory = ()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=>food.category)),];
    setCategories(uniqueCategories);
    console.log(uniqueCategories)
  }

  useEffect(()=>{listUniqueCategory()},[]);
  const dispatch = useDispatch("All");
  const selectCategory = useSelector((state)=>state.category.category);
  return (
    <div className='mx-6'>
      <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectCategory === "All" && "bg-green-500 text-white"
          }`}>
            All
        </button>
        {categories.map((category,idx)=>{
            return (
            <button onClick={()=>dispatch(setCategory(category))} key={idx} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white 
              ${selectCategory === category && "bg-green-500 text-white"}`}>
              {category}
          </button>)
          })
        }
      </div>
    </div>
  )
}

export default Category
