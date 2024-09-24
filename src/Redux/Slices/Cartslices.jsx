import { createSlice } from "@reduxjs/toolkit";

const CartSlices = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addtoCart : (state,action)=>{
              const existingitem = state.cart.find((item)=>item.id === action.payload.id);
              if(existingitem){
                state.cart = state.cart.map((item)=>
                item.id === action.payload.id?{...item, qty: item.qty + 1}:item);
              }
              else{

                  state.cart.push(action.payload);
              }
        },
        removefromcart:(state,action)=>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
        },
        incrementQty : (state,action)=>{
            state.cart = state.cart.map((item)=>
            item.id === action.payload.id? { ...item, qty: item.qty + 1}: item)
        },
        decrementQty : (state,action)=>{
            state.cart = state.cart.map((item)=>
            item.id=== action.payload.id?{...item, qty:item.qty-1}:item);
        }
    }
})

export const { addtoCart,removefromcart,incrementQty,decrementQty} = CartSlices.actions;
export default CartSlices.reducer;