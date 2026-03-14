import { setIsAuth, setUserData } from '../redux/features/userSlice';
import { api } from './api';

// Fetch the current logged-in user
export const getCurrentUser = async (dispatch) => {
  dispatch(setIsAuth())
  try {
    const response = await api.get('/user/current-user');
    dispatch(setUserData(response.data.currentuser))
    console.log("after login::", response.data);
  } catch (error) {
    throw error;
  }
};
