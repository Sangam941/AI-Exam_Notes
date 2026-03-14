import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from './api/user'
import Notes from './pages/Notes'
import History from './pages/History'
import Credits from './pages/Credits'

export const baseUrl = import.meta.env.VITE_SERVER_URL

const App = () => {

  const dispatch = useDispatch()

  
  const { userData , isAuth} = useSelector(store=>store.user)
  const navigate = useNavigate()
  console.log(userData)

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [])

  useEffect(() => {
    if (isAuth) navigate("/")

  }, [isAuth])
  
  
  return (
    <Routes>
      <Route path='/' element={isAuth? <Home />: <Navigate to={'/auth'} />} />
      <Route path='/auth' element={isAuth? <Navigate to={'/'} />: <Auth />} />
      <Route path='/notes' element={!isAuth? <Navigate to={'/auth'} />: <Notes />} />
      <Route path='/history' element={!isAuth? <Navigate to={'/auth'} />: <History />} />
      <Route path='/add-credits' element={!isAuth? <Navigate to={'/auth'} />: <Credits />} />
    </Routes>
  )
}

export default App