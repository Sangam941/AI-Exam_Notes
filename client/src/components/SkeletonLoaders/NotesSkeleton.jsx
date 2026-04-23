import React from 'react';

const NotesSkeleton = () => {
  return (
    <div className='min-h-screen max-w-7xl bg-white text-black overflow-hidden mx-auto px-6 animate-pulse'>
        {/* NavBar Skeleton */}
        <div className='bg-black/80 h-16 w-full max-w-7xl mx-auto mt-8 rounded-2xl'></div>
        
        <div className='relative pb-10'>
            {/* Form Input Container */}
            <div className='relative bg-black/80 py-5 max-w-7xl mx-auto mt-8 rounded-2xl flex items-center justify-between'>
                <div className='flex flex-col w-full gap-5 px-6'>
                    {/* Inputs */}
                    <div className="h-11 bg-white/20 rounded-lg w-full border-[1.5px] border-white/10"></div>
                    <div className="h-11 bg-white/20 rounded-lg w-full border-[1.5px] border-white/10"></div>
                    <div className="h-11 bg-white/20 rounded-lg w-full border-[1.5px] border-white/10"></div>
                    
                    {/* Toggle Buttons */}
                    <div className='flex gap-5 max-sm:flex-col'>
                        <div className="h-8 bg-white/20 rounded-full w-40"></div>
                        <div className="h-8 bg-white/20 rounded-full w-40"></div>
                        <div className="h-8 bg-white/20 rounded-full w-40"></div>
                    </div>
                    
                    {/* Generate Button */}
                    <div className="h-12 bg-white/40 rounded-lg w-full mt-2 shadow-lg"></div>
                </div>
            </div>
            
            {/* Bottom Result Area Skeleton */}
            <div className='bg-gray-100 h-64 w-full max-w-7xl mx-auto mt-8 rounded-2xl border border-gray-200 shadow-sm'></div>
        </div>
    </div>
  )
}

export default NotesSkeleton;
