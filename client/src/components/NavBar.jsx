import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../api/auth'
import { AnimatePresence, motion } from 'motion/react'
import { CirclePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';

export const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showCredits, setShowCredits] = useState(false)
    const [showProfile, setShowProfile] = useState(false)


    const { userData } = useSelector(store => store.user)

    const handleLogout = () => {
        logoutUser(dispatch)
    }

    console.log(userData)


    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className='bg-black/80 py-3 max-w-7xl mx-auto mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-6 text-white flex items-center justify-between'>
            <div
                onClick={() => navigate('/')}
                className="left flex items-center gap-2 cursor-pointer">
                <img src="./logo.webp" width={40} alt="this is the logo" />
                <h1 className='text-white text-xl font-bold max-sm:hidden'>ExamNotes <span className='text-white/50'>AI</span></h1>
            </div>

            <div className="right flex items-center gap-4">
                <div className='relative'>
                    <motion.div
                        onClick={() => { setShowCredits(!showCredits); setShowProfile(false) }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="shadow-[inset_0_0px_3px_rgba(176,175,175,0.3)] cursor-pointer credits flex items-center gap-2 bg-white/10 rounded-full py-2 px-3">
                        <div>💠<span className='text-sm font-semibold'>{userData?.credits}</span></div>
                        <motion.span
                            whileTap={{ scale: 0.85 }}
                            transition={{ duration: 0.2 }}><CirclePlus size={22} fill='white' stroke='#00000090' className='mt-[2px]' /></motion.span>
                    </motion.div>

                    <AnimatePresence>
                        {showCredits &&
                            <motion.div
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -15, opacity: 0 }}
                                transition={{ duration: 0.3 }}

                                className='flex flex-col gap-3 absolute bg-black p-3 text-white w-52 right-0 top-15 shadow-[0_25px_45px_rgba(0,0,0,0.6)] rounded-lg'
                            >
                                <h1 className='font-semibold'>Buy Credits</h1>
                                <p className='text-gray-300 leading-tight text-sm tracking-tighter'>Use Credits to generate AI notes, diagram & PDFs.</p>
                                <motion.button
                                    onClick={() => navigate('/add-credits')}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.1 }}
                                    className='cursor-pointer px-5 py-2 w-full font-semibold text-black bg-gray-200 rounded-md max-sm:text-sm'>Buy More Credits</motion.button>

                            </motion.div>
                        }
                    </AnimatePresence>
                </div>


                <div className='relative'>
                    <motion.div
                        onClick={() => { setShowProfile(!showProfile); setShowCredits(false) }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="shadow-[inset_0_0px_3px_rgba(176,175,175,0.3)] cursor-pointer profile rounded-full bg-white/10 w-10 h-10 flex items-center justify-center font-semibold">
                        {userData?.name?.slice(0, 1)}
                    </motion.div>

                    <AnimatePresence>
                        {showProfile &&
                            <motion.div
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -15, opacity: 0 }}
                                transition={{ duration: 0.3 }}

                                className='flex flex-col absolute bg-black p-2 text-white w-44 right-0 top-15 shadow-[0_25px_45px_rgba(0,0,0,0.6)] rounded-lg'
                            >

                                <MenuItem onClick={() => navigate('/')} text='History' />
                                <div className='w-full h-[1px] bg-gray-800'></div>
                                <MenuItem onClick={() => handleLogout()} text='Sign-Out' red />

                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </motion.header>
    )
}
