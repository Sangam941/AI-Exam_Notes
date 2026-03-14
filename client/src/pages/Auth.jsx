import React from 'react'
import { motion, spring } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import { signupUser } from '../api/auth';
import { useDispatch } from 'react-redux';

const Auth = () => {

    const features = [
        {
            icon: "🎁",
            title: "50 Free Credits",
            desc: "Starts with 50 credits to generate notes without paying..."
        },
        {
            icon: "🤖",
            title: "AI-Powered Notes",
            desc: "Experience advanced AI-generated and summarized study notes for your exams."
        },
        {
            icon: "⚡",
            title: "Instant Results",
            desc: "Generate complete notes in seconds. No more manual searching or summarizing."
        },
        {
            icon: "📱",
            title: "Mobile Friendly",
            desc: "Access your AI notes on any device, whenever and wherever you need them."
        },
        {
            icon: "🔒",
            title: "Secure & Private",
            desc: "We respect your privacy and keep your study material safe with us."
        },
        {
            icon: "🌎",
            title: "All Subjects",
            desc: "Supports notes generation for a wide array of subjects and disciplines."
        }
    ];

    const dispatch = useDispatch()
    const handleGoogleAuth = async ()=>{
        try {
            const response = await signInWithPopup(auth, provider)
            const user = response.user
            const name = user.displayName
            const email = user.email
            
            signupUser(dispatch, name, email)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div
            className='bg-white text-black min-h-screen overflow-hidden px-8 max-w-6xl mx-auto'>
            <motion.header
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className='bg-black/80 py-6 max-w-7xl mx-auto mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-8 text-white'>
                <h1 className='text-white text-2xl font-bold'>AI-Exam Notes</h1>
                <p className='text-sm'>AI powered exam oriented notes & revision</p>
            </motion.header>

            <main className='mt-5 w-full flex gap-10 max-sm:flex-col justify-center items-center'>
                <div className="left sm:w-1/2 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className="text font-extrabold text-5xl sm:-mt-20 mb-8">
                        <h1 className='text-black/80'>Unlock Smart</h1>
                        <h1 className='text-black/70'>AI Notes</h1>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    >
                        <motion.button
                        onClick={()=>handleGoogleAuth()}
                            whileHover={{ y: -10, scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: spring, stiffness: 200, damping: 18 }}
                            className='px-5 py-2 bg-black/80 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.6)] mb-3 cursor-pointer'><FcGoogle size={22} /> Continue with Google</motion.button>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque. Ipsa officiis laborum facilis blanditiis voluptatem, aliquam eos sint sunt exercitationem beatae veritatis voluptatum ab repellat id quo saepe qui numquam omnis?</p>
                    </motion.div>
                </div>

                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="py-5 right sm:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ type: spring, stiffness: 200, damping: 18 }}
                            key={idx} className='shadow-[0_10px_20px_rgba(0,0,0,0.6)] cursor-pointer p-5 bg-black/80 text-white rounded-2xl'>
                            <div className="icon text-2xl mb-2">{feature.icon}</div>
                            <h1 className='font-semibold'>{feature.title}</h1>
                            <p className='text-sm text-gray-400'>{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    )
}

export default Auth