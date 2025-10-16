import React from 'react'

const Flexible = () => {
    return (
        <section className="relative bg-white overflow-hidden">
        <br/>
        <br/>
        {/* decorative left image (hidden on small screens) */}
        {/* <img
            className="pointer-events-none hidden md:block absolute left-0 top-1/2 -translate-y-1/2 opacity-70"
            src={"/assets/chess.svg"}
            alt=""
            aria-hidden="true"
        /> */}

        <div className="max-w-5xl h-[100%] mx-auto px-6">
            <div className="relative text-center px-4 py-8 md:px-8 md:py-12 rounded-lg">
            {/* decorative right image (hidden on small screens) */}
            <img className='absolute right-0 top-[20%]' src={"/assets/chess.svg"} alt='alt'/>


            <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>
                Flexible work, Simple Price
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-600">
                Growth your business with using us
            </p>

            <h4 className="mt-6 text-sm font-medium text-gray-700">Monthly Toggle Yearly</h4>

            <div className="mt-6 max-w-xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch">
                <div className="flex h-[300px!important] flex-col items-center justify-center p-4 md:p-6 border border-[#FF553E] rounded-3xl w-full md:w-1/2">
                <div className='text-center'>
                    <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-lg font-semibold text-gray-900">Free</h2>
                    <h3 className="text-sm text-gray-600">1 seat</h3>
                    <h3 className="text-sm text-gray-600">2 projects</h3>
                    </div>
                    <p className="mt-3 text-2xl font-bold text-gray-900">$0<span className='text-xs'>/forever</span></p>
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-3 rounded-full text-xs bg-[#FF553E] text-white shadow hover:brightness-95 transition">
                    Start 14 Days Trial
                    </button>
                </div>
                </div>

                <div className="flex h-[300px!important] flex-col items-center justify-center p-4 md:p-6 rounded-3xl w-full md:w-1/2 bg-[#FF553E] text-white">
                <div className='text-center'>
                    <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-lg font-semibold">Premium</h2>
                    <h3 className="text-sm">Unlimited seats</h3>
                    <h3 className="text-sm">Unlimited projects</h3>
                    </div>
                    <p className="mt-3 text-2xl font-bold">$30<span className='text-xs'>/forever</span></p>
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-xs rounded-full bg-white text-[#FF553E] shadow hover:opacity-90 transition">
                    Start 14 Days Trial
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <br/>
        <br/>
        </section>

    )
}

export default Flexible