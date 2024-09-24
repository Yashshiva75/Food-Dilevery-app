import {configureStore} from "@reduxjs/toolkit"
import Cartslices from "./Slices/Cartslices"
const Store = configureStore({
    reducer:{
        cart:Cartslices
    }
})
export default Store