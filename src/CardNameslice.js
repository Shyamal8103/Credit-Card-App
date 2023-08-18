import { createSlice } from "@reduxjs/toolkit";
const CardNameslice=createSlice({
    name : 'nameslice',
    initialState:{
        value : 'Your Name'
    },reducers:{
        changecardname:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {changecardname}=CardNameslice.actions
export default CardNameslice.reducer