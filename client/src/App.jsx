import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from './api/user'

export const baseUrl = import.meta.env.VITE_SERVER_URL

const App = () => {

  const dispatch = useDispatch()

  
  const { userData , isAuth} = useSelector(store=>store.user)
  const navigate = useNavigate()
  console.log(userData, isAuth)

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [])

  useEffect(() => {
    console.log("auth", isAuth)
    if (isAuth) navigate("/")

  }, [isAuth])
  
  
  return (
    <Routes>
      <Route path='/' element={isAuth? <Home />: <Navigate to={'/auth'} />} />
      <Route path='/auth' element={isAuth? <Navigate to={'/'} />: <Auth />} />
    </Routes>
  )
}

export default App