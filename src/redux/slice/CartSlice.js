import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    amount : 0,
    total : 0
}

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {

      add : (state, action) => {
      state.amount++
      const cartItems = state.cartItems.find(item => item.id === action.payload.id)
      if(cartItems){
        cartItems.amount += 1
        state.amount +=1
      } else{
        state.cartItems.push({...action.payload}, {amount : 0})
      }
      state.total += action.payload.price
      },


      increase : (state, action) => {
        const cartItems = state.cartItems.find(items => items.id === action.payload.id)
        if(cartItems){
            state.amount += 1
            cartItems.amount +=1
            state.total += cartItems.price 
        }
      },

      decrease : (state, action) => {
        const cartItems = state.cartItems.find(items => items.id === action.payload.id)
        if(cartItems && cartItems.amount > 0){
            cartItems.amount -= 1
            state.amount -= 1
            state.total -= cartItems.price
        }
        if(cartItems.amount === 0){
            state.cartItems  = state.cartItems.filter(items => items.id !== action.payload.id)
        }
      },

      remove : (state, action) => {
        const cartItems = state.cartItems.find(items => items.id === action.payload.id)
        if(cartItems){
            state.amount -= cartItems.amount
            state.total -= cartItems.price * cartItems.amount
            state.cartItems = state.cartItems.filter(items => items.id !== action.payload.id)
        }
      },

       reset : (state) => {
        state.cartItems = []
        state.amount = 0
        state.total = 0
       }


    }
})

export const {add, increase, decrease, remove, reset} = CartSlice.actions
export default CartSlice.reducer;