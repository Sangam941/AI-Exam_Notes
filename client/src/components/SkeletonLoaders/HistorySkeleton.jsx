import React from 'react';

const HistorySkeleton = () => {
  return (
    <div className='min-h-screen max-w-7xl bg-white text-black overflow-hidden mx-auto px-6 animate-pulse'>
        {/* NavBar Skeleton */}
        <div className='bg-black/80 h-16 w-full max-w-7xl mx-auto mt-8 rounded-2xl'></div>
        
        <div className="flex justify-end my-4 md:hidden">
            <div className="h-10 w-28 bg-gray-200 rounded-md shadow-md"></div>
        </div>
        
        <div className='relative pb-10 flex gap-5 w-full'>
            {/* Sidebar Skeleton */}
            <div className="bg-black/80 h-142 mt-8 rounded-2xl w-1/3 max-md:hidden p-4 shadow-[0_20px_45px_rgba(0,0,0,0.6)] border border-white/10">
                <div className='flex items-center justify-between mb-4'>
                    <div className="h-6 bg-white/20 rounded w-1/2"></div>
                    <div className="h-8 bg-white/10 rounded w-20"></div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="h-24 bg-white/10 rounded-xl p-3 flex flex-col justify-center gap-2">
                            <div className="h-4 bg-white/20 rounded w-3/4"></div>
                            <div className="flex gap-2">
                                <div className="h-4 bg-white/10 rounded-full w-16"></div>
                                <div className="h-4 bg-white/10 rounded-full w-20"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Main Content Skeleton */}
            <div className='flex flex-1 mt-8'>
                <div className="w-full h-[600px] bg-gray-100/50 rounded-2xl p-8 border border-gray-100">
                    <div className="h-10 bg-gray-300 rounded w-1/3 mb-8"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
                    
                    <div className="h-48 bg-gray-200 rounded-xl w-full mb-8"></div>
                    
                    <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 mb-3"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HistorySkeleton;
