import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col w-auto lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
            <h1 className='text-xl font-bold'>Foodie</h1>
        </div>
        <div>
            <input type='search' name='search' id='' placeholder='Enter the dish' autoComplete='off' className='p-3 border-2 text-sm rounded-lg outline-none w-full lg:w-[25vw]'></input>
        </div>
    </nav>
  )
}

export default Navbar
