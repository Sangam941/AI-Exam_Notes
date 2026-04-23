import React, { useEffect, Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from './api/user'

import HomeSkeleton from './components/SkeletonLoaders/HomeSkeleton'
import NotesSkeleton from './components/SkeletonLoaders/NotesSkeleton'
import HistorySkeleton from './components/SkeletonLoaders/HistorySkeleton'

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'))
const Auth = lazy(() => import('./pages/Auth'))
const Notes = lazy(() => import('./pages/Notes'))
const History = lazy(() => import('./pages/History'))
const Credits = lazy(() => import('./pages/Credits'))

export const baseUrl = import.meta.env.VITE_SERVER_URL

const App = () => {

  const dispatch = useDispatch()
  const { userData, isAuth, loading } = useSelector(store => store.user)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])

  if (loading) {
    if (location.pathname === '/' || location.pathname === '/auth') return <HomeSkeleton />
    if (location.pathname === '/notes') return <NotesSkeleton />
    if (location.pathname === '/history') return <HistorySkeleton />
    return <div>Loading...</div>
  }

  // useEffect(() => {
  //   if (isAuth) navigate("/")
  // }, [isAuth])

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={isAuth ? <Suspense fallback={<HomeSkeleton />}><Home /></Suspense> : <Navigate to='/auth' />}
        />
        <Route
          path='/auth'
          element={isAuth ? <Navigate to='/' /> : <Suspense fallback={<HomeSkeleton />}><Auth /></Suspense>}
        />
        <Route
          path='/notes'
          element={!isAuth ? <Navigate to='/auth' /> : <Suspense fallback={<NotesSkeleton />}><Notes /></Suspense>}
        />
        <Route
          path='/history'
          element={!isAuth ? <Navigate to='/auth' /> : <Suspense fallback={<HistorySkeleton />}><History /></Suspense>}
        />
        <Route
          path='/add-credits'
          element={!isAuth ? <Navigate to='/auth' /> : <Suspense fallback={<div>Loading page...</div>}><Credits /></Suspense>}
        />
      </Routes>
    </>
  )
}

export default App