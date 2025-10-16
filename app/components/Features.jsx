"use client"
import React from 'react'
import { motion } from 'framer-motion';


const Features = () => {
  return (
    <section className="bg-[#FFFFFF] ">
      <br/>
      <br/>
      <div className="max-w-4xl relative mx-auto px-6 text-center">
        <img className='absolute h-1/3 hidden lg:block top-[0%] right-[10%]' src={"/assets/rocket.svg"} alt='rocket'/>
        {/* Section Heading */}
          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-gray-900 mb-4"
          >
              Some Excellent Features For You          
          </motion.h2>
        <p className="mt-3 text-gray-600 text-xs">
          An enim nullam tempor sapien gravida donec enim ipsum porta <br className="hidden sm:block"/>justo
          congue magna at pretium purus pretium ligula
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 w-full">
            {/* Card 1 */}
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#70D0DC] text-white text-left p-6 rounded-2xl shadow-lg flex flex-col gap-2 items-start"
            >
            <div className='p-3 rounded-lg bg-[#FFFFFF80] border-[#FFFFFF80]'>
              <img height={30} width={30} src={"/assets/task-lists.svg"} alt='logo'/>
            </div>
            {/* <AlertTriangle className="h-10 w-10 mb-3" /> */}
            <h2 className="text-xl font-semibold">Preset List of Task</h2>
            <p className="text-xs">
            Make bill payments easily using the wallet app                
            </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#7562E0] gap-2 text-white text-left p-6 rounded-2xl shadow-lg flex flex-col items-start"
            >
            {/* <Lock className="h-10 w-10 mb-3" /> */}

            <div className='p-3 rounded-lg bg-[#FFFFFF80] border-[#FFFFFF80]'>
              <img height={30} width={30} src={"/assets/bell-1.svg"} alt='logo'/>
            </div>
            <h2 className="text-xl font-semibold">Reminder of Task</h2>
            <p className="text-xs">
            Make bill payments easily using the wallet app                
            </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#FA865F] text-left gap-2 text-white p-6 rounded-2xl shadow-lg flex flex-col items-start"
            >
            {/* <EyeOff className="h-10 w-10 mb-3" /> */}
            <div className='p-3 rounded-lg bg-[#FFFFFF80] border-[#FFFFFF80]'>
              <img height={30} width={30} src={"/assets/agenda-1.svg"} alt='logo'/>
            </div>
            <h2 className="text-xl font-semibold">Complecation Report</h2>
            <p className="text-xs">
            Make bill payments easily using the wallet app                
            </p>
            </motion.div>
        </div>
      </div>
      <br/>
      <br/>
    </section>
  )
}

export default Features