import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Success from "./Pages/Success"
import Error from "./Pages/Error"
import Category from './assets/components/Category'
import Fooditems from './assets/components/Fooditems'
import Cart from './assets/components/Cart'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/category" element={<Category/>}/>
    </Routes>
    </BrowserRouter>
    <Category/>
    <Fooditems/>
    <Cart/>
    
    </>
  )
}

export default App
