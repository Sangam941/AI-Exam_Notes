import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../api/auth'

const Home = () => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    logoutUser(dispatch)
  }
  return (
    <div className='text-black'>this is the home page
    <button 
    onClick={()=>handleLogout()}
    className='px-4 py-2 bg-red-500 rounded-lg'>logout</button></div>
  )
}

export default Home