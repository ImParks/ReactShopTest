import { configureStore,createSlice } from '@reduxjs/toolkit'


let stock = createSlice({
name : 'stock',
initialState : [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}
],
reducers : {
  addStock(state){
    let copy = [...state]
    copy[1] = {id : copy[1].id , name : copy[1].name , count : copy[1].count + 1}
    
    
    return copy
   }
 }
})

export let {addStock} = stock.actions;


export default configureStore({
    
  reducer: { 
    stock : stock.reducer

  }
}) 