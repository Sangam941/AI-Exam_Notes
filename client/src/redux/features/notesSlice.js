import { createSlice } from "@reduxjs/toolkit";



export const notesSlice = createSlice({
    name: "notes",
    initialState:{
        notes:null,
        history:[]
    },
    reducers:{
        setNotes: (state, action)=>{
            state.notes = action.payload
        },

        setNotesHistory: (state, action)=>{
            state.history = action.payload
        },
        addNewNotes: (state, action) => {
            state.history.push(action.payload);
        }
   
    }
})

export const {setNotes, setNotesHistory, addNewNotes} = notesSlice.actions
export default notesSlice.reducer