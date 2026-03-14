import React, { useState } from 'react'

const History = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className='flex gap-2'>
    <button
        onClick={() => setEnabled(!enabled)}
        className={`relative cursor-pointer w-12 h-6 rounded-full transition-colors duration-300
${enabled ? "bg-green-500" : "bg-gray-300"}`}
    >
        <span
            className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300
${enabled ? "translate-x-6" : ""}`}
        />
    </button>

    <div className="label">include diagram</div>
</div>
  )
}

export default History