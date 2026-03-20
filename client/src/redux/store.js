import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice.js'
import noteReducer from './features/notesSlice.js'

export const store = configureStore({
    reducer:{
        user: userReducer,
        note: noteReducer,
    }
})