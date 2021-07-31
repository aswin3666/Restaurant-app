import { createSlice } from "@reduxjs/toolkit";
export const RestaurentidSlice = createSlice({
    name:"id",
    initialState:{
        value: 0
    },
    reducers:{
        update_id:(state,action)=>{
            state.value=action.payload.id-1
        }
    }
})

export const {update_id} = RestaurentidSlice.actions
export default RestaurentidSlice.reducer