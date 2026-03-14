import React from 'react'
import {motion, spring} from 'motion/react'

const Cards = ({icon, title, desc}) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: spring, stiffness: 200, damping: 18 }}
            className='shadow-[0_10px_20px_rgba(0,0,0,0.6)] cursor-pointer p-5 bg-black/80 text-white rounded-2xl'>
            <div className="icon text-2xl mb-2">{icon}</div>
            <h1 className='font-semibold'>{title}</h1>
            <p className='text-sm text-gray-400'>{desc}</p>
        </motion.div>
    )
}

export default Cards