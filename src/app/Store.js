import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./components/UserSlice.js"

export const store = configureStore({
reducer:{
auth:UserSlice
}
})