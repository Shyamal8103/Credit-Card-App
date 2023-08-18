import { createSlice } from "@reduxjs/toolkit";

const Cardslice = createSlice({
    name : 'mySlice',
    initialState: {
        value : '****************'
    },reducers:{
        cardNumberChange:(state,action)=>{
            var a="****************"
            
            state.value= action.payload+a.slice(action.payload.length,state.value.length)
            // console.log(action.payload)
        }   
        

    }
})
export const {cardNumberChange} =Cardslice.actions
export default Cardslice.reducer