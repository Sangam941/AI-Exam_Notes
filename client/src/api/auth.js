import { setIsAuth, setLoading, setUserData } from "../redux/features/userSlice";
import { api } from "./api";

//signup/login
export const signupUser = async(dispatch, name,email)=>{
  dispatch(setLoading(true))
    try {
        const response = await api.post('/auth/google', {name, email})
        console.log("logindata:: ",response.data.user)
        dispatch(setUserData(response.data.user))
        dispatch(setIsAuth(true))
    } catch (error) {
        throw error
    } finally{
      dispatch(setLoading(false))
    }
}

//logout user
export const logoutUser = async (dispatch)=>{
    try {
      const response = await api.get('/auth/logout');
      dispatch(setIsAuth(false))

    } catch (error) {
      throw error;
    }
  }