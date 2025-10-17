import React from 'react'

const Trusted = () => {
    return (
        <section className="features bg-[#F8FEFE] ">
            <br/>
            <br/>
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Feature Grid */}
                <div className="flex flex-col justify-center md:flex-row gap-4 w-full">
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
                    <div className='report flex flex-col p-3 text-left gap-3'>
                        <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>See Our Trusted <br className="hidden sm:block"/>Partners</h1>
                        <p className='text-gray-900 text-xs'>An enim nullam tempor sapien gravida donec enim ipsum porta <br className="hidden sm:block"/>justo
                        congue magna at pretium purus pretium ligula</p>
                        <div className="mt-8">
                            <button className="px-6 py-3 rounded-full border border-[#FF553E] text-[#FF553E] shadow hover:bg-[#FF553E] hover:text-white transition">
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