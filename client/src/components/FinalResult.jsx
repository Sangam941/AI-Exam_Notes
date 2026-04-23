import React, { useState } from 'react'
import { motion } from 'motion/react'
import ReactMarkdown from 'react-markdown'
import { Download } from 'lucide-react'
import MermaidSetup from './MermaidSetup'
import Recharts from './Recharts'
import { pdfDownloader } from '../api/pdf'
import removeMarkdown from "remove-markdown";

const FinalResult = ({ notes, title }) => {

    const markdown = {
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
        ),
        p: ({ children }) => (
            <p className="text-gray-700 mb-3 leading-relaxed">{children}</p>
        ),
        li: ({ children }) => (
            <li className="ml-5 list-disc mb-1">{children}</li>
        ),
        strong: ({ children }) => (
            <strong className="text-black font-semibold">{children}</strong>
        ),
    }

    const [revision, setRevision] = useState(false)

    const handlePdf = async (e)=>{
        e.stopPropagation()

        // console.log(notes, title="web develoment")
        // Convert Markdown → plain text
    const plainText = removeMarkdown(notes.notes);

    // console.log("Sending to API:", plainText);
        
        await pdfDownloader(plainText, title="web development")
    }
    return (
        <motion.div className="left w-72 max-md:w-full bg-white py-5 max-w-7xl mt-8 max-md:mt-4 rounded-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] px-4 text-black flex-1">

            <div className='flex items-center justify-between py-2 mb-3'>
                <h1 className='text-4xl font-bold text-purple-700'>📓 Generated Notes</h1>
                <div className='flex items-center gap-3'>
                    <button
                        onClick={() => setRevision(!revision)}
                        className={`${revision ? 'text-red-800 bg-red-200 border-red-500' : 'text-green-800 bg-green-200 border-green-500'} px-3 py-2 font-semibold rounded-md cursor-pointer active:scale-95 transition-all border`}
                    >
                        {revision ? "Exit Revision Mode" : "Quick Revision (for exam)"}
                    </button>
                    <button
                    onClick={(e)=>handlePdf(e)}
                    className="pdf px-3 py-2 rounded-md text-white font-semibold bg-purple-600 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all">
                        <Download /> Download PDF
                    </button>
                </div>
            </div>

            <hr />

            <TopicHighliter icon={"📓"} title = {"Detailed Notes"} color = {"green"} />

            {!revision && <div className="prose mt-5 px-6">
                <ReactMarkdown components={markdown}>
                    {notes.notes}
                </ReactMarkdown>
            </div>}

            {revision && (
                <div className='bg-green-200/40 rounded-lg p-6 mx-10 mt-10'>
                    <h1 className='font-bold text-xl text-green-900'>🔥 Exam Quick Revision Points</h1>
                    <ul className='ml-10 mt-5'>
                        {notes.revisionPoints && Array.isArray(notes.revisionPoints) && notes.revisionPoints.map((point, idx) => (
                            <li key={idx} className='list-disc text-black'>
                                <ReactMarkdown components={markdown}>{point}</ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {
                notes?.diagram?.data &&
                <div className='mt-10'>
                    <TopicHighliter icon={'📝'} title={'Diagram'} color={'purple'}/>
                    <MermaidSetup diagram={notes?.diagram?.data} />
                    <i className='text-gray-500 text-sm ml-5'><span className='font-semibold'>Note:</span> If you need the diagram for the future use then screen shot to save the diagram</i>
                </div>
            }


            {
                notes?.charts && notes?.charts.length>0 &&
                <div className='mt-10'>
                    <TopicHighliter icon={'📈'} title={'Visual Charts'} color={'orange'}/>
                    <Recharts charts={notes?.charts} />
                    <i className='text-gray-500 text-sm ml-5'><span className='font-semibold'>Note:</span> If you need the diagram for the future use then screen shot to save the diagram</i>
                </div>
            }

        </motion.div>
    )
}

export default FinalResult

const TopicHighliter = ({icon, title, color}) => {
    const colors = {
        green: "from-green-100 to-green-50 text-green-700",
        purple: "from-purple-100 to-purple-50 text-purple-700",
        red: "from-red-100 to-red-50 text-red-700",
        blue: "from-blue-100 to-blue-50 text-blue-700",
        yellow: "from-yellow-100 to-yellow-50 text-yellow-700",
        orange: "from-orange-100 to-orange-50 text-orange-700",
        pink: "from-pink-100 to-pink-50 text-pink-700"
    }
    return (
        <div className={`mt-4 px-3 py-2 flex items-center gap-2 rounded-md text-2xl font-bold bg-gradient-to-r ${colors[color]}`}>
            <div className="icon">{icon}</div>
            <div className="text">{title}</div>
        </div>
    )
}