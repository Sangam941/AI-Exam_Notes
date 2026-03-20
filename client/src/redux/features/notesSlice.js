import { createSlice } from "@reduxjs/toolkit";



export const notesSlice = createSlice({
    name: "notes",
    initialState:{
        notes:null
    },
    reducers:{
        setNotes: (state, action)=>{
            state.notes = action.payload
        }
    }
})

export const {setNotes} = notesSlice.actions
export default notesSlice.reducer