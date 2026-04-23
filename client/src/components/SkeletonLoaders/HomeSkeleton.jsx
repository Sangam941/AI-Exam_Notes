import React from 'react';

const HomeSkeleton = () => {
  return (
    <div className='min-h-screen max-w-7xl bg-white text-black overflow-hidden mx-auto px-6 animate-pulse'>
        {/* NavBar Skeleton */}
        <div className='bg-black/80 h-16 w-full max-w-7xl mx-auto mt-8 rounded-2xl'></div>
        
        <main className='md:p-25 mt-10 w-full'>
            <section className='part-1 w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="left flex flex-col gap-5">
                    <div className="h-16 bg-gray-200 rounded-xl w-3/4"></div>
                    <div className="h-16 bg-gray-200 rounded-xl w-full"></div>
                    <div className="h-10 bg-gray-300 rounded-lg w-1/3 mt-5"></div>
                </div>
                <div className="right max-sm:mt-10 flex justify-center">
                    <div className="h-[300px] w-[300px] bg-gray-200 rounded-[50px] shadow-sm transform -mt-10"></div>
                </div>
            </section>
            
            <section className="section-2 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-48 bg-gray-200 rounded-2xl shadow-sm"></div>
                ))}
            </section>
        </main>
    </div>
  )
}

export default HomeSkeleton;
