import { configureStore,createSlice } from '@reduxjs/toolkit'
import stock from './store/stokSlice.js'




export default configureStore({
    
  reducer: { 
    stock : stock.reducer

  }
}) 