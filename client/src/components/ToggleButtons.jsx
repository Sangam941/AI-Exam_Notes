import React from 'react'

const ToggleButtons = ({label, enabled, change}) => {
    
    return (
        <div className='flex gap-2'>
            <button
            type='button'
                onClick={() => change(!enabled)}
                className={`relative shadow-[inset_0_0_6px_rgba(255,255,255,0.3)] cursor-pointer w-12 h-6 rounded-full transition-colors duration-300
  ${enabled ? "bg-green-500" : "bg-white/10"}`}
            >
                <span
                    className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300
    ${enabled ? "translate-x-6" : ""}`}
                />
            </button>

            <div className="label">{label}</div>
        </div>
    )
}

export default ToggleButtons