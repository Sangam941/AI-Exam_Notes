import { setIsAuth, setLoading, setUserData } from '../redux/features/userSlice';
import { api } from './api';

// Fetch the current logged-in user
export const getCurrentUser = async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await api.get('/user/current-user');
    dispatch(setUserData(response.data.currentUser))
    dispatch(setIsAuth(true))
    console.log("after login::", response.data);
  } catch (error) {
    dispatch(setIsAuth(false))
    throw error;
  }finally{
    dispatch(setLoading(false))
  }
};
