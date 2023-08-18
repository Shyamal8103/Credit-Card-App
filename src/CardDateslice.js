import {createSlice} from '@reduxjs/toolkit';

const CardDateslice=createSlice({
    name : 'mydate',
    initialState:{
        value : ['**','**']
    },reducers:{
        changeCardDate:(state,action)=>{
           
        let month=action.payload.split('-')[1]
        let year =action.payload.split('-')[0].slice(2,4)
          state.value=[month,year]  
        console.log(action.payload)
        }
    }
})

export const {changeCardDate}=CardDateslice.actions

export default CardDateslice.reducer