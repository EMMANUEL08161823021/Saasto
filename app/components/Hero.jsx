import React from 'react'

const Hero = () => {
  return (
    <section className="h-[90vh] relative overflow-hidden flex justify-center items-center px-4 sm:px-6 lg:px-8">

      {/* Left Images */}
      <img className='absolute hidden lg:block" left-0 top-[20%]' src={"/assets/mobile-screen-1.svg"} alt='mobile-screen-1' />
      {/* <div className='absolute left-[15%] top-[10%] border' style={{height: "200px", width: "200px"}}></div> */}
      {/* <img className='absolute left-[20%] top-[13%] scale-50' src={"/assets/Alarm_Clock.svg"} alt='Alarm Clock' /> */}

      {/* Center Content */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <img className='absolute left-[-20%] w-1/5 top-[-60%]' src={"/assets/alarm-vector.svg"} alt='Alarm Clock' />
          <img className='absolute left-[-5%] w-1/5 top-[-50%]' src={"/assets/Alarm_Clock.svg"} alt='Alarm Clock' />

          <h1 className="font-sans font-extrabold text-4xl leading-tight text-gray-900">
            A Collaborative Time <br className="hidden sm:block" /> Tracking That You Need
          </h1>

          <p className="mt-4 font-sans text-gray-600 text-base sm:text-sm max-w-2xl mx-auto">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna <br className="hidden sm:block" />
            at pretium purus pretium ligula.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3 rounded-full bg-[#FF553E] text-white font-medium shadow hover:bg-[#e14834] transition-all duration-200">
              Start 14 Days Trial
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <img className='absolute hidden lg:block" right-[3%] top-[40%] border' src={"/assets/mobile-screen-2.svg"} alt='mobile-screen-2' />
    </section>
  )
}

export default Hero
