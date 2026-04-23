import { setNotesHistory } from '../redux/features/notesSlice';
import { api } from './api';

// Fetch the current logged-in user
export const generateNotes = async (payload) => {
  console.log("payload::", payload)
  try {
    const response = await api.post('/notes/generate-notes', payload);
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error;
  }
};


// fetching all notes
export const getAllNotes = async (dispatch) => {
  try {
    const response = await api.get('/notes/all-notes');
    console.log(response.data.allNotes)
    dispatch(setNotesHistory(response.data.allNotes))
  } catch (error) {
    throw error;
  }
};
