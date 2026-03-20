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
