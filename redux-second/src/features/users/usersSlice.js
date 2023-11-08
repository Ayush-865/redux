import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0', name:'Ayush'},
    {id:'1', name:'Dhruv'},
    {id:'2', name:'Advait'},
]

const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})


export const selectAllUsers = (state)=>state.users; 

export default usersSlice.reducer;