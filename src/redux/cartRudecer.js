import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocurt : (state , action ) =>{
        const product = state.data.find(item => item.id === action.payload.id)
       !product  && state.data.push(action.payload)
    },
    deletetocurt : (state , action ) =>{
        state.data = state.data.filter(item => item.id != action.payload.id)
    },
    alldeletetocurt : (state  ) =>{
        state.data = []
    },
  },
})

export const {  addtocurt , deletetocurt , alldeletetocurt } = cartSlice.actions

export default cartSlice.reducer