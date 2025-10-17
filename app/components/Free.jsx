import React from 'react'

const Free = () => {
    return (
        <section className="overflow-hidden relative">

            <br/>
            <br/>
            <br/>
            {/* <br/> */}

            {/* decorative imgs kept exactly as you provided */}
            <img src={"/assets/left-hand.svg"} className='absolute hidden lg:block h-1/5 left-[0%] top-[14%]' alt='alt'/>
            <img src={"/assets/right-hand.svg"} className='absolute hidden lg:block h-1/6 right-[0%] top-[45%]' alt='alt'/>

            <div className="relative w-full sm:max-w-xl md:max-w-4xl mx-auto px-4 text-center">
                {/* Feature Grid */}
                <div className="flex flex-col w-full lg:flex-row justify-between items-center">

                    <div className='report flex flex-col text-left gap-4'>
                        <h1 className='font-bold text-2xl text-gray-900 md:text-3xl'>Get it now for free</h1>
                        <p className='text-sm md:text-sm text-gray-600'>We are offering free debit cards once you sing up and <br className="hidden lg:block"/>
                        order a card. we wont chargeyou for our debit card.</p>

                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <button className="sm:flex-1 flex items-center justify-center gap-2 py-3 rounded-full border bg-[#FF553E] text-white shadow-sm transition">
                            <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full">
                                <img src={"/assets/apple.svg"} alt='apple'/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-xs">Download on the store</h4>
                                <span className="text-sm font-semibold">App Store</span>
                            </div>
                            </button>

                            <button className="w-full sm:flex-1 flex items-center justify-center gap-1 py-3 rounded-full border border-[#FF553E] text-[#FF553E] shadow-sm transition">
                            <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full">
                                <img src={"/assets/playstore.svg"} alt='playstore'/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-xs">Get it on</h4>
                                <span className="text-sm font-semibold">Google Play</span>
                            </div>
                            </button>

                        </div>
                    </div>

                    {/* <br className='block lg:hidden'/> */}

                    {/* wrap phone image so we can center it on small screens without touching the <img> */}
                    {/* <img className='border' src={"/assets/iphone.svg"} alt='iphone'/> */}
                    <div className=''>

                    <img className='absolute hidden md:block bottom-[-100%] right-[0%] max-w-xs mx-3 lg:w-1/4' src={"/assets/mobile-screen.svg"} alt='mobile'/>
                    </div>

                    {/* <div className="flex justify-center md:justify-end">
                    </div> */}

                </div>
            </div>
            <br/>
            {/* <br/> */}
            <br/>
            <br/>
        </section>
    )
}

export default Free
