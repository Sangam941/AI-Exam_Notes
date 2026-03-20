import React from 'react'
import { motion } from 'motion/react'

const Sidebar = ({ notes }) => {

    if (!notes || !notes.subtopics || !notes.questions || !notes.questions.short || !notes.questions.long) {
        return null
    }
    return (
        <motion.div className="left w-72 max-md:w-full bg-white py-5 max-w-7xl mt-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-4 text-black">
            <span className='font-semibold text-lg text-green-500'>📌 Quick Exam View</span>
            <section className='text-sm mt-5 font-semibold'>
                <h1>⭐ Sub Topics (Priority Wise)</h1>
                {Object.entries(notes.subtopics).map(([level, topics]) => (
                    <div className='mt-2 p-2 bg-green-200/20 rounded-md'>
                        <p className='text-yellow-500 font-semibold mb-2'>{level} Priority</p>
                        <ul>
                            {topics.map((topic, idx) => (
                                <li className='ml-2 list-disc list-inside font-normal pb-1' key={idx}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className='text-sm font-semibold bg-yellow-200/20 rounded-md mt-5 py-3 px-2'>
                <div className='flex flex-col gap-2'>
                <h1>🔥 Importance Questions</h1>
                <p>{notes.importance}</p>
                <h1>❓ Important Questions</h1>
                </div>

                <div className="short font-normal bg-blue-200/40 rounded-lg p-3 mt-3">
                    <h1 className='font-semibold text-purple-600 pb-2'>Short Questions</h1>
                    {notes.questions.short.map((short,idx)=>(
                        <ul key={idx}>
                            <li className='list-disc list-inside ml-2 pb-1 text-black/80'>{short}</li>
                        </ul>
                    ))}
                </div>

                <div className="short font-normal bg-pink-200/40 rounded-lg p-3 mt-3">
                    <h1 className='font-semibold text-purple-600 pb-2'>Long Questions</h1>
                    {notes.questions.long.map((long,idx)=>(
                        <ul key={idx}>
                            <li className='list-disc list-inside ml-2 pb-1 text-black/80'>{long}</li>
                        </ul>
                    ))}
                </div>

                <div className="short font-normal bg-green-200/40 rounded-lg p-3 mt-3">
                    <h1 className='font-semibold text-purple-600 pb-2'>Diagram Question</h1>
                    {notes.questions.diagram.map((qn,idx)=>(
                        <ul key={idx}>
                            <li className='list-disc list-inside ml-2 pb-1 text-black/80'>{qn}</li>
                        </ul>
                    ))}
                </div>
            </section>
            
        </motion.div>
    )
}

export default Sidebar