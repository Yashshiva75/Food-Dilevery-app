import {configureStore} from "@reduxjs/toolkit"
import Cartslices from "./Slices/Cartslices"
import CategorySlice from "./Slices/CategorySlice"
import Category from "../assets/components/Category"
import SearchSLices from "./Slices/SearchSLices"
const Store = configureStore({
    reducer:{
        cart:Cartslices,
        category : CategorySlice,
        search:SearchSLices,
    },
})
export default Store