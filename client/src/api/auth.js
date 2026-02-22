import { setIsAuth, setUserData } from "../redux/features/userSlice";
import { api } from "./api";

//signup/login
export const signupUser = async(dispatch, name,email)=>{
    try {
        const response = await api.post('/auth/google', {name, email})
        // console.log(response.data.user)
        dispatch(setUserData(response.data.user))
    } catch (error) {
        throw error
    }
}

//logout user
export const logoutUser = async (dispatch)=>{
    try {
      const response = await api.get('/auth/logout');
      dispatch(setIsAuth())

    } catch (error) {
      throw error;
    }
  }