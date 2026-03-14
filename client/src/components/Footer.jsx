import React from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/auth';
import { useDispatch } from 'react-redux';

const Footer = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Dummy quick links data for Notes History and Add Credits
    const quickLinks = [
        { name: 'Notes', route: '/notes' },
        { name: 'History', route: '/history' },
        { name: 'Add Credits', route: '/add-credits' },
    ];

    const handleLogOut = () => {
        logoutUser(dispatch)
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className='bg-black/80 py-3 max-w-7xl mx-auto mb-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-6 text-white'
        >
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <div className="first">
                <div className="left flex items-center gap-2 mb-3">
                    <img src="./logo.webp" width={32} alt="this is the logo" />
                    <h1 className='text-white text-lg font-bold max-sm:hidden'>ExamNotes <span className='text-white/50'>AI</span></h1>
                </div>
                <p className='text-sm text-white/80'>
                    Empowering students with concise AI-generated exam notes.
                </p>
            </div>

            <div className="second flex flex-col md:items-center justify-center">
                <h1 className='mb-3 font-semibold'>Quick Links</h1>
                <ul>
                    {quickLinks.map((link, idx) => {
                        return (
                            <li
                                onClick={() => navigate(link.route)}
                                key={idx} className='hover:scale-105 transition-all text-sm md:text-center mb-1 text-white/80 list-none cursor-pointer'>
                                {link.name}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="third flex flex-col md:items-center">
                <h1 className='mb-3 font-semibold'>Support & Account</h1>
                <ul>
                    {['SignOut', 'support@gmail.com'].map((link, idx) => {
                        return (
                            <li
                                onClick={() => {
                                    if (link === 'SignOut') handleLogOut()
                                }}
                                key={idx} className={`mb-1 hover:scale-105 transition-all md:text-center text-sm list-none cursor-pointer ${link === 'SignOut' ? "text-red-500 hover:text-red-400" : "hover:text-white text-white/70"} font-semibold`}>
                                {link}
                            </li>
                        )
                    })}
                </ul>
            </div>
            </div>

            <div className="hr-line h-[1px] mx-auto my-3 bg-white/40 max-w-[80%]"></div>

            <p className='text-center text-sm text-white/70'>&copy; {new Date().getFullYear()} ExamNotes AI. All rights reserved.</p>
        </motion.div>
    )
}

export default Footer