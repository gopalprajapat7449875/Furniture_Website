import { createSlice } from "@reduxjs/toolkit"

const initialState = {
user:null,
token:null
}

const UserSlice = createSlice({

name:"auth",
initialState,

reducers:{

setLosin:(state,action)=>{
state.user=action.payload.user
state.token=action.payload.token
},

logout:(state)=>{
state.user=null
state.token=null
}

}

})

export const {setLosin,logout}= UserSlice.actions

export default  UserSlice.reducer