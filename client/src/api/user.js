import { setIsAuth, setUserData } from '../redux/features/userSlice';
import { api } from './api';

// Fetch the current logged-in user
export const getCurrentUser = async (dispatch) => {
  dispatch(setIsAuth())
  try {
    const response = await api.get('/user/current-user');
    dispatch(setUserData(response.data.currentuser))
    return response.data.currentuser;
  } catch (error) {
    throw error;
  }
};
