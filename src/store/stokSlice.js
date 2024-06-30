import { createSlice } from '@reduxjs/toolkit'


let stock = createSlice({
name : 'stock',
initialState : [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}
],
reducers : {
   plusStock(state,action){
      let index = state.findIndex(x => x.id === action.payload)
      state[index].count += 1
   },
   minusStock(state,action){
      let index = state.findIndex(x => x.id === action.payload)
      state[index].count -= 1
      if(state[index].count <= 0){
         state.splice(index,1)
      }
   },
   addStock(state,action){
      let index = state.findIndex(x=> x.id === action.payload.shoesInfo.id)
      if(index !== -1){
         state[index].count += 1
      } else {
         let shoes = action.payload.shoesInfo
         let copy = [...state,{id : shoes.id,name : shoes.title,count : 1}]
         return copy
      }
   },
   deleteStock(state,action){
      let index = state.findIndex(x=>x.id===action.payload)
      state.splice(index,1)
   }

}
})

export let {plusStock,minusStock,addStock,deleteStock} = stock.actions;

export default stock