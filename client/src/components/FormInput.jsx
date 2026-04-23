import React, { useEffect, useState } from 'react'
import ToggleButtons from './ToggleButtons'
import { easeOut, motion } from 'motion/react'
import { generateNotes } from '../api/notes'
import { useDispatch, useSelector } from 'react-redux'
import { updateCredits } from '../redux/features/userSlice'
import Sidebar from './Sidebar'
import FinalResult from './FinalResult'
import { addNewNotes, setNotes } from '../redux/features/notesSlice'

const FormInput = () => {
    const [topic, setTopic] = useState('')
    const [level, setLlass] = useState('')
    const [examType, setExamType] = useState('')
    const [revisionMode, setRevisionMode] = useState(false)
    const [diagram, setDiagram] = useState(false)
    const [charts, setCharts] = useState(false)
    const [loading, setLoading] = useState(false)
    const [progressValue, setprogressValue] = useState(0)
    const [progressText, setprogressText] = useState("")
    // const [notes, setNotes] = useState(null)
    const dispatch = useDispatch()
    const {notes} = useSelector(store=> store.note)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            topic,
            level,
            examType,
            revisionMode,
            diagram,
            charts
        }

        //fetching generate notes api
        try {
            setLoading(true);
            const result = await generateNotes(payload)
            console.log("result.data:: ",result.data)
            dispatch(setNotes(result.data))
            dispatch(addNewNotes(result.data))
            setprogressText("Done!");
            setprogressValue(99)

            if (result && typeof result.creditLeft === "number") {
                dispatch(updateCredits(result.creditLeft));
            }
        } catch (error) {
            console.error('Error generating notes:', error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 300); 
        }

        setTopic('');
        setLlass('');
        setExamType('');
        setRevisionMode(false);
        setDiagram(false);
        setCharts(false);
        setprogressValue(0);
        setprogressText('');
    }

    let value = 0

    useEffect(() => {
        if (!loading) return; // only run when loading
        setprogressText("Generating...");

        const interval = setInterval(() => {
            value += Math.random() * 8;

            if (value >= 99) {
                setprogressText("Done!");
                clearInterval(interval);
            } else if (value > 0 && value < 40) {
                setprogressText("Generating...");
            } else if (value >= 40 && value < 60) {
                setprogressText("Preparing notes...");
            } else if (value >= 60 && value < 80) {
                setprogressText("Finishing up...");
            } else if (value >= 80 && value < 99) {
                setprogressText("Almost ready...");
            }

            setprogressValue(Math.floor(value));
        }, 500);

        return () => clearInterval(interval);
    }, [loading]);

    return (
        <div className='relative pb-10'>
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='relative bg-black/80 py-5 max-w-7xl mx-auto mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-6 text-white flex items-center justify-between'>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className='flex flex-col w-full gap-5'>
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
                        <ToggleButtons label={'Exam Revision Mode'} enabled={revisionMode} change={setRevisionMode} />
                        <ToggleButtons label={'Include Diagram'} enabled={diagram} change={setDiagram} />
                        <ToggleButtons label={'Include Charts'} enabled={charts} change={setCharts} />
                    </div>

                    <motion.button
                        whileHover={!loading ? { y: -5, scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.99 } : {}}
                        transition={{ duration: 0.2 }}
                        type="submit"
                        disabled={loading}
                        className="mt-2 font-bold shadow-lg bg-white/80 text-black/70 cursor-pointer rounded-lg py-3 disabled:cursor-not-allowed"
                    >
                        {loading ? "Generating Notes..." : "Generate Notes"}
                    </motion.button>

                    {loading ? <div className="progres">
                        <div className="progress-bar h-2 w-full rounded-full bg-white/20">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progressValue}%` }}
                                transition={{ ease: easeOut }}
                                className="progress-bar h-2 w-full rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></motion.div>
                        </div>

                        <div className="progress-text flex justify-between mt-2">
                            <span className='text-xs font-semibold text-white/70'>{progressText}</span>
                            <span className='text-xs font-semibold text-white/70'>{progressValue}%</span>
                        </div>
                        <p className='text-xs mt-2 font-semibold text-white/70 text-center'>This will take few minutes. please do not close or refresh the page.</p>
                    </div> :
                        ""
                    }

                </form>

            </motion.div>

            {!notes? <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='notes bg-white h-64 py-5 max-w-7xl mx-auto mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-6 text-black flex flex-col justify-center items-center cursor-pointer'>
                <span>📝📓</span>
                <p>Generated notes will appear here...</p>
            </motion.div>:
            <div className='w-full flex gap-5 max-md:flex-col max-md:items-center max-md:gap-0'>
                <Sidebar notes={notes}/>
                <FinalResult notes={notes} topic={topic}/>
            </div>
            }

        </div>
    )
}

export default FormInput