import React from 'react'

const Trusted = () => {
    return (
        <section className="features bg-[#F8FEFE] ">
            <br/>
            <br/>
            <div className="w-full sm:max-w-xl md:max-w-4xl mx-auto px-4 text-center">
                {/* Feature Grid */}
                <div className="flex flex-col items-center justify-center md:flex-row gap-4 w-full">
                    {/* <div className='flex border gap-3'> */}
                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-3 items-end'>
                            <div className='p-3 border-[#F353251A] bg-[#F353251A] rounded-2xl'>
                                <img src={"/assets/icon-1.svg"} alt='icon'/>
                            </div>
                            <div className='p-5 border-[#FFBA001A] bg-[#FFBA001A] rounded-2xl'>
                                <img src={"/assets/icon-3.svg"} alt='icon'/>
                            </div>
                            <div className='p-3 border-[#1c60bf1a] bg-[#1c60bf1a] rounded-2xl'>
                                <img src={"/assets/icon-5.svg"} alt='icon'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-start'>
                            <div className='p-3 border-[#33d6641a] bg-[#33d6641a] rounded-2xl'>
                                <img src={"/assets/icon-2.svg"} alt='icon'/>
                            </div>
                            <div className='p-5 border-[#4285f41a] bg-[#4285f41a] rounded-2xl'>
                                <img src={"/assets/icon-4.svg"} alt='icon'/>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <br/>

                    {/* Card 2 */}
                    <div className='report flex flex-col text-left gap-3'>
                        <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>See Our 
                            <span className="relative inline-block">
                                <img
                                src={"/assets/shape.svg"}
                                alt=""
                                aria-hidden="true"
                                className="absolute left-1/4 top-[85%] -translate-x-1/2 -translate-y-1/2 w-18 h-18  md:w-28 md:h-18 pointer-events-none"
                                />
                                <span className="relative px-1.5"> Trusted </span>  
                            </span>
                            
                            <br className="hidden md:block"/>
                            Partners
                        </h1>
                        <p className='text-gray-900 text-sm'>
                        See the companies that trust us —<br className="hidden md:block"/>
                        leading teams use our time tracking and analytics to streamline workflows and scale growth.
                        </p>
                        <div className="mt-8">
                            <button className="px-6 py-3 text-sm rounded-full border border-[#FF553E] text-[#FF553E] shadow hover:bg-[#FF553E] hover:text-white transition">
                            Get Started
                            </button>
                        </div>   
                        
                    </div>

                </div>
            </div>
            <br/>
            <br/>
        </section>
    )
}

export default Trusted