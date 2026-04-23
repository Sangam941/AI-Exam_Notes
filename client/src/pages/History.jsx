import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { motion } from 'motion/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotes } from '../api/notes'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import FinalResult from '../components/FinalResult'

const History = () => {

  const { history } = useSelector(store => store.note)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSelected, setIsSelected] = useState(null)
  const [selectedNotes, setselectedNotes] = useState(null)

  useEffect(() => {
    getAllNotes(dispatch)
  }, [history])

  useEffect(() => {
    if (history.length > 0 && !selectedNotes && !selectedNotes) {
      setIsSelected(history[0]._id);
      setselectedNotes(history[0])
    }
  }, [history]);

  return (
    <div className='min-h-screen max-w-7xl bg-white text-black overflow-hidden mx-auto px-6'>
      <NavBar />

      {/* history notes */}

      <div className='relative pb-10 flex gap-5 w-full'>

        {/* sidebar for hte history subject */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='scrollY relative bg-black/80 py-4 w-1/3 h-142 mt-8 rounded-2xl backdrop-blur-xl border border-white/10 overflow-y-scroll shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-4 text-white'>

          <div className='flex items-center justify-between mb-2'>
            <h1 className='font-bold mb-2'>📝 Your Notes</h1>
            <div onClick={(e) => { e.stopPropagation(); navigate('/notes') }} className="add rounded-md text-xs cursor-pointer active:scale-95 transition-all shadow-md font-semobold bg-white/10 p-2">➕ New Notes</div>
          </div>

          <div className="history flex flex-col gap-2">
            {history && history.length > 0 && history.map((notes, idx) => {
              return (
                <div key={idx}
                onClick={()=>{setIsSelected(notes._id); setselectedNotes(notes)}}
                className={`cursor-pointer p-3 flex justify-center gap-1 flex-col rounded-xl  [box-shadow:inset_0_0_5px_rgba(255,255,255,0.2)] ${isSelected === notes._id ? "bg-green-500/60":"bg-white/10"}`}>
                  <div className="title text-white font-semibold">{notes.topic}</div>
                  <div className='flex gap-2'>
                    {notes.level && <span className='rounded-full bg-blue-700/30 text-blue-200 border border-blue-200/20 px-2 text-xs pb-[2px] pt-[1px]'>Class/Level: {notes.level}</span>}
                    {notes.examType && <span className='rounded-full bg-purple-700/30 text-purple-200 border border-purple-200/20 px-2 text-xs pb-[2px] pt-[1px]'>{notes.examType}</span>}
                  </div>
                  <div className='mt-2 text-white/80 text-xs flex gap-2'>
                    {notes.diagram && <span>📊 Diagram</span>}
                    {notes.charts && <span>📈 Charts</span>}
                  </div>
                </div>
              )
            })}
          </div>

        </motion.div>

        {/* respective notes */}

        <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-1'>
        {
          selectedNotes && <FinalResult notes={selectedNotes.content} topic={selectedNotes.topic}/>
        }
        </motion.div>

      </div>

      <Footer />

    </div>
  )
}

export default History