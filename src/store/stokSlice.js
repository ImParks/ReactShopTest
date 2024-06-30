import { createSlice } from '@reduxjs/toolkit'


let stock = createSlice({
name : 'stock',
initialState : [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}
],
reducers : {
  plusStock(state,action){
    let index = state.findIndex(x => x.id == action.payload)
    state[index].count += 1
 },
 minusStock(state,action){
    let index = state.findIndex(x => x.id == action.payload)
    state[index].count -= 1
 },
 addStock(state,action){
   let index = state.findIndex(x=> x.id == action.payload)
   console.log(action.payload.id)
 }
 

}
})

export let {plusStock,minusStock,addStock} = stock.actions;

export default stock