import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        userData: null,
        isAuth: false,
        loading: true,
    },
    reducers:{      
        setIsAuth: (state, action)=>{
            state.isAuth = action.payload
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setUserData: (state, action) =>{
            state.userData = action.payload
        },
        updateCredits: (state, action) => {
            if (state.userData) {
                state.userData.credits = action.payload;
            }
        }
    }
}) 

export const {setUserData, setLoading, setIsAuth, updateCredits} = userSlice.actions
export default userSlice.reducer 