import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const loginSlice = createSlice({
  name: 'user',
  initialState:{
    token:  Cookies.get('token') || null,
   
    userdata:null,
    userpath:'',
  },
  
  reducers: {
    setToken:(state,action)=>{
        state.token=action.payload
        console.log(state.token)
        Cookies.set('token', state.token)
    },
    logOut:(state)=>{
        
        state.token=null
        Cookies.remove('token')
    },
     Userdata:(state,action)=>{
        state.userdata=action.payload
        console.log(state.userdata)
    },
    UserPath:(state,action)=>{
        state.userpath=action.payload
        console.log(state.userpath)
    }
  },
})

export const { setToken,logOut,Userdata,UserPath } = loginSlice.actions

export default loginSlice.reducer