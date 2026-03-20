import React, { useState } from 'react'
import Cards from '../components/Cards';
import { NavBar } from '../components/NavBar';
import { motion } from 'motion/react'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

    const cardsData = [
    {
      icon: "📚",
      title: "Exam Notes",
      desc: "Comprehensive AI-generated notes to supercharge your exam prep."
    },
    {
      icon: "🗒️",
      title: "Project Notes",
      desc: "Effortlessly organize and keep track of all your key project information in one place."
    },
    {
      icon: "📊",
      title: "Progress Tracker",
      desc: "Monitor your study milestones and track your subject-wise scores."
    },
  {
    icon: "⬇️",
    title: "PDF Download",
    desc: "Easily download your notes as PDF files for offline use and sharing."
  },
  ]
  return (
    <div className='min-h-screen max-w-7xl bg-white text-black overflow-hidden mx-auto px-6'>
      
      <NavBar/>
      <main className='md:p-25 mt-10 w-full'>
        <motion.section
        initial={{x:-20, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1.5}}
        className='part-1 w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className="left flex flex-col gap-5">
            <motion.div 
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              z: 50
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className='heading font-extrabold text-5xl text-shadow-[0_15px_30px_rgba(0,0,0,0.4)]'>
              <h1 className='text-black/80'>Create Smart</h1>
              <h1 className='text-black/80'>AI Notes in</h1>
              <h1 className='text-black/70'>Seconds</h1>
            </motion.div>

            <motion.p 
            whileHover={{ 
              rotateX: 5,
              rotateY: 5,
              z: -50
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className='text-gray-700'>Generate exam-focused notes, project documentation, flow diagrams and revision-ready content using AI --- faster, cleaner and smarter.</motion.p>

            <div>
              <motion.button 
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                y:-5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={()=>navigate('/notes')}
              className='relative z-10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] font-semibold text-white bg-black/80 rounded-lg px-6 py-2 cursor-pointer'>Get Started</motion.button>
            </div>
          </div>

          <motion.div 
          initial={{x:80, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1.5}}
          className="right max-sm:mt-10">
              <img src="./home_img.webp" className='-mt-10' alt="this is home image" />
          </motion.div>
        </motion.section>

        <motion.section 
        initial={{y:15, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1.5}}
        className="section-2 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {cardsData.map((card, idx)=>{
            return (
              <Cards key={idx} icon={card.icon} title={card.title} desc={card.desc}/>
            )
          })}
        </motion.section>
      </main>

      <Footer/>
    </div>
  )
}

export default Home

