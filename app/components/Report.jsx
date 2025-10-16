"use client"
import React from 'react'
import { motion } from 'framer-motion';


const Report = () => {
    return (
        <section className="features bg-[#FFFFFF] ">
        <br/>
        <br/>
        <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Feature Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className='flex items-center justify-center'>
                    {/* <div className='rectangle'></div> */}
                    <div
                    className="relative"
                    >
                        <img className='w-1/2 mx-auto' src={"/assets/mobile-screen.svg"} alt='mobile'/>
                    

                        <img className='absolute right-[12%] top-[-10%] h-1/3' src={"/assets/checklist.svg"} alt='mobile' />
    

                        <img className='absolute left-[16%] h-1/3 top-[40%]' src={"/assets/kit-1.svg"} alt='mobile' />

                        <img className='absolute right-[5%] h-1/3 top-[40%]' src={"/assets/kit-2.svg"} alt='mobile' />

                        <img className='absolute bottom-[0%] w-1/2 right-[20%]' src={"/assets/kit-3.svg"} alt='mobile' />
      
                    </div>
                </div>
                <br/>

                {/* Card 2 */}
                <div className='report flex flex-col text-left gap-4'>
                <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>
                    Analytics & Report <br className="hidden sm:block"/>Breakdown
                </h1>

                <p className='text-sm text-gray-600 max-w-prose'>
                    An enim nullam tempor sapien gravida donec enim ipsum porta <br className="hidden sm:block"/>
                    justo congue magna at pretium purus pretium ligula
                </p>

                <div className='content flex flex-col gap-4'>
                    <div className='flex gap-3 items-start'>
                    <div className='p-3 w-12 h-12 rounded-lg flex items-center justify-center flex-none bg-[#FA855C] border border-[#FA855C]'>
                        <img className='w-6 h-6 object-contain' height={30} width={30} src={"/assets/time.svg"} alt='time icon'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-sm font-bold text-gray-900'>Automatic Event Tracking</h4>
                        <p className='text-xs text-gray-600'>Time Tracking is never been easier. <br className="hidden sm:block"/>Just let the stopwatch run</p>
                    </div>
                    </div>

                    <div className='flex gap-3 items-start'>
                    <div className='p-3 w-12 h-12 rounded-lg flex items-center justify-center flex-none bg-[#7AD6E1] border border-[#7AD6E1]'>
                        <img className='w-6 h-6 object-contain' height={30} width={30} src={"/assets/frame.svg"} alt='frame icon'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-sm font-bold text-gray-900'>Customizable dashboard</h4>
                        <p className='text-xs text-gray-600'>Time Tracking is never been easier. <br className="hidden sm:block"/>Just let the stopwatch run</p>
                    </div>
                    </div>

                    <div className='flex gap-3 items-start'>
                    <div className='p-3 w-12 h-12 rounded-lg flex items-center justify-center flex-none bg-[#FFC954] border border-[#FFC954]'>
                        <img className='w-6 h-6 object-contain' height={30} width={30} src={"/assets/calendar.svg"} alt='calendar icon'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-sm font-bold text-gray-900'>Statistics retroactively</h4>
                        <p className='text-xs text-gray-600'>Time Tracking is never been easier. <br className="hidden sm:block"/>Just let the stopwatch run</p>
                    </div>
                    </div>
                </div>
                </div>


            </div>
            <br/>
            <br/>
        </div>
        </section>
    )
}

export default Report