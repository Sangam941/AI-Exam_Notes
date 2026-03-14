import React, { useState } from 'react'
import ToggleButtons from './ToggleButtons'
import { motion } from 'motion/react'
import { Notebook } from 'lucide-react'

const FormInput = () => {
    const [topic, setTopic] = useState('')
    const [level, setLlass] = useState('')
    const [examType, setExamType] = useState('')
    const [rivisionMode, setRivisionMode] = useState(false)
    const [diagram, setDiagram] = useState(false)
    const [charts, setCharts] = useState(false)
    return (
        <div className='pb-10'>
            <motion.div 
            initial={{y:15, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1}}
            className='bg-black/80 py-5 max-w-7xl mx-auto mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-6 text-white flex items-center justify-between'>
                <form className='flex flex-col w-full gap-5'>
                    <input
                        type="text"
                        className='p-2 rounded-lg bg-black/20 outline-none focus:ring-2 placeholder:text-white/70 border-[1.5px] border-white/20'
                        placeholder='Enter topic (e.g. Web Development)'
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                    />
                    <input
                        type="text"
                        className='p-2 rounded-lg bg-black/20 outline-none focus:ring-2 placeholder:text-white/70 border-[1.5px] border-white/20'
                        placeholder='Class/Level (e.g. class 11)'
                        value={level}
                        onChange={e => setLlass(e.target.value)}
                    />
                    <input
                        type="text"
                        className='p-2 rounded-lg bg-black/20 outline-none focus:ring-2 placeholder:text-white/70 border-[1.5px] border-white/20'
                        placeholder='Enter type (e.g. BOARD, TERMINAL)'
                        value={examType}
                        onChange={e => setExamType(e.target.value)}
                    />

                    {/* for the toggle buttons */}

                    <div className='flex gap-5 max-sm:flex-col'>
                        <ToggleButtons label={'Exam Rivision Mode'} enabled={rivisionMode} change={setRivisionMode} />
                        <ToggleButtons label={'Include Diagram'} enabled={diagram} change={setDiagram} />
                        <ToggleButtons label={'Include Charts'} enabled={charts} change={setCharts} />
                    </div>

                    <motion.input
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        type='button'
                        className="mt-2 generate font-bold shadow-lg cursor-pointer bg-white/80 text-black/70 rounded-lg py-3"
                        value={'Generate Notes'} />
                </form>
            </motion.div>

            <motion.div 
            initial={{y:15, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1}}
            className='notes bg-white h-64 py-5 max-w-7xl mx-auto mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-6 text-black flex flex-col justify-center items-center cursor-pointer'>
                <span>📝📓</span>
                <p>Generated notes will appear here...</p>
            </motion.div>
        </div>
    )
}

export default FormInput