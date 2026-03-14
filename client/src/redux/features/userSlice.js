import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        userData: null,
        isAuth: false,
    },
    reducers:{
        setIsAuth: (state)=>{
            state.userData = null
            state.isAuth = false
        },
        setUserData: (state, action) =>{
            state.userData = action.payload
            state.isAuth = true
        },
    }
}) 

export const {setUserData, setIsAuth} = userSlice.actions
export default userSlice.reducer 