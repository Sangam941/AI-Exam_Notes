import React, { useEffect, Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from './api/user'

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'))
const Auth = lazy(() => import('./pages/Auth'))
const Notes = lazy(() => import('./pages/Notes'))
const History = lazy(() => import('./pages/History'))
const Credits = lazy(() => import('./pages/Credits'))

export const baseUrl = import.meta.env.VITE_SERVER_URL

const App = () => {

  const dispatch = useDispatch()
  const { userData, isAuth } = useSelector(store => store.user)
  const navigate = useNavigate()

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (isAuth) navigate("/")
  }, [isAuth])

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route
          path='/'
          element={isAuth ? <Home /> : <Navigate to='/auth' />}
        />
        <Route
          path='/auth'
          element={isAuth ? <Navigate to='/' /> : <Auth />}
        />
        <Route
          path='/notes'
          element={!isAuth ? <Navigate to='/auth' /> : <Notes />}
        />
        <Route
          path='/history'
          element={!isAuth ? <Navigate to='/auth' /> : <History />}
        />
        <Route
          path='/add-credits'
          element={!isAuth ? <Navigate to='/auth' /> : <Credits />}
        />
      </Routes>
    </Suspense>
  )
}

export default App