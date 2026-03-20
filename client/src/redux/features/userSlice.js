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
        updateCredits: (state, action) => {
            if (state.userData) {
                state.userData.credits = action.payload;
            }
        }
    }
}) 

export const {setUserData, setIsAuth, updateCredits} = userSlice.actions
export default userSlice.reducer 