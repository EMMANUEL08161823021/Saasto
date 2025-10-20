"use client"
import React, { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion, useInView  } from 'framer-motion'
const variants = {
  idle: { x: 0, y: 0, rotate: 0 },
  ring: {
    x: [0, -10, 10, -6, 6, -3, 0],
    rotate: [0, -6, 6, -3, 3, -1, 0],
    y: [0, -8, 0, -6, 0, -3, 0],
    transition: {
      duration: 0.9,         // duration of one loop
      ease: 'easeInOut',
      repeat: 2,             // play 3 times total (0 = once). set to Infinity for continuous.
      repeatType: 'loop'
    }
  }
}

function useCountUp(target, { duration = 2000, start = false } = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  const startTsRef = useRef(null)

  useEffect(() => {
    if (!start) return

    const tick = (ts) => {
      if (!startTsRef.current) startTsRef.current = ts
      const elapsed = ts - startTsRef.current
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic for nicer feel
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      setValue(current)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        // make sure final value exact
        setValue(target)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      startTsRef.current = null
    }
  }, [start, target, duration])

  return value
}

/** format to 15K+ form */
function formatToKPlus(n) {
  if (n >= 1000) {
    const k = Math.round(n / 1000)
    return `${k}K+`
  }
  return n.toString()
}

const Hero = () => {

  const shouldReduce = useReducedMotion()

  const ref = useRef(null)
  // useInView from framer-motion — triggers when the element enters viewport
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  // targets
  const t1 = 15000
  const t2 = 30000
  const t3 = 15000

  // start counting when inView is true
  const n1 = useCountUp(t1, { duration: 1800, start: inView })
  const n2 = useCountUp(t2, { duration: 2200, start: inView })
  const n3 = useCountUp(t3, { duration: 2000, start: inView })

  // motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
  }
  return (
    <section className="h-[120vh] relative overflow-hidden flex flex-col justify-center items-center">

      <br className='block sm:hidden'/>
      <div className='h-[80%] px-4 sm:px-6 lg:px-8" lg:px-8"'>

        {/* Left Images */}
        {/* <img className='absolute hidden lg:block" left-0 top-[20%]' src={"/assets/mobile-screen-1.svg"} alt='mobile-screen-1' /> */}
        {/* <div className='absolute left-[15%] top-[10%] border' style={{height: "200px", width: "200px"}}></div> */}
        {/* <img className='absolute left-[20%] top-[13%] scale-50' src={"/assets/Alarm_Clock.svg"} alt='Alarm Clock' /> */}
        <img className='absolute right-[-1%] top-[0%] scale-50' src={"/assets/banner-vector.svg"} alt='Alarm Clock' />
        <img className='absolute hidden md:block right-[30%] bottom-[35%] scale-50' src={"/assets/clipboard-vector.svg"} alt='Alarm Clock' />
        {/* <img className='absolute right-[30%] bottom-[40%] scale-50' src={"/assets/clipboard.jpg"} alt='Alarm Clock' /> */}
        <img className='absolute hidden md:block left-[30%] bottom-[45%] scale-50' src={"/assets/kite-vector.svg"} alt='Alarm Clock' />

        {/* Center Content */}
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative max-w-4xl mx-auto text-left sm:text-center ">
            <img className='absolute hidden md:block left-[-20%] w-1/5 top-[-60%]' src={"/assets/alarm-vector.svg"} alt='Alarm Clock' />
            <motion.img
              className="absolute hidden sm:block left-[-5%] w-1/5 top-[-50%] pointer-events-none"
              src="/assets/Alarm_Clock.svg"
              alt="Alarm Clock"
              variants={variants}
              initial="idle"
              // animate immediately on mount unless user prefers reduced motion
              animate={shouldReduce ? 'idle' : 'ring'}
              style={{ transformOrigin: '50% 70%' }}
              draggable={false}
            />
            <motion.img
              className="absolute block sm:hidden right-[12%] w-1/5 top-[-30%] pointer-events-none"
              src="/assets/Alarm_Clock.svg"
              alt="Alarm Clock"
              variants={variants}
              initial="idle"
              // animate immediately on mount unless user prefers reduced motion
              animate={shouldReduce ? 'idle' : 'ring'}
              style={{ transformOrigin: '50% 70%' }}
              draggable={false}
            />
            <h1 className="font-sans font-extrabold z-20 text-3xl md:text-4xl leading-tight text-gray-900">
              A Collaborative <br className='block sm:hidden'/> Time <br className="hidden sm:block" /> 
              <span className="relative inline-block">
                <img
                  src={"/assets/shape.svg"}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/4 top-[90%] -translate-x-1/2 -translate-y-1/2 w-18 h-18  md:w-28 md:h-18 pointer-events-none"
                />
                <span className="relative pr-1.5">Tracking</span>
              </span>
              That You Need
            </h1>


            <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
              Simplify team timekeeping with accurate reports, effortless timers, intuitive controls, and clear insights to boost daily productivity consistently.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 rounded-full bg-[#FF553E] text-white text-sm font-medium shadow hover:bg-[#e14834] transition-all duration-200">
                Start 14 Days Trial
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <img className='absolute hidden lg:block" right-[3%] top-[40%] border' src={"/assets/mobile-screen-2.svg"} alt='mobile-screen-2' />
      </div>
      <div className="bg-white h-auto w-full p-6 flex  justify-center">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl w-full border border-black rounded-lg p-4"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div className="flex-1 text-center p-4" variants={card} role="group" aria-label="Active users">
            <h1 className="text-3xl font-bold text-gray-900">{formatToKPlus(n1)}</h1>
            <p className="text-sm text-gray-500">Active Users</p>
          </motion.div>

          <motion.div className="flex-1 text-center p-4" variants={card} role="group" aria-label="Downloads">
            <h1 className="text-3xl font-bold text-gray-900">{formatToKPlus(n2)}</h1>
            <p className="text-sm text-gray-500">Downloads</p>
          </motion.div>

          <motion.div className="flex-1 text-center p-4" variants={card} role="group" aria-label="Customers">
            <h1 className="text-3xl font-bold text-gray-900">{formatToKPlus(n3)}</h1>
            <p className="text-sm text-gray-500">Customers</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
