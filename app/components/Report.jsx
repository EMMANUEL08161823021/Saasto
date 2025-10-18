"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Report = () => {
  return (
    <section className="features bg-[#FFFFFF]">
      <br />
      <br />
      <motion.div
        className="w-full sm:max-w-xl md:max-w-4xl mx-auto px-4 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div variants={item} className="flex items-center justify-center">
            <div className="relative">
              <img className="w-1/2 mx-auto" src={"/assets/mobile-screen.svg"} alt="mobile" />
              <img className="absolute right-[12%] top-[-10%] h-1/3" src={"/assets/checklist.svg"} alt="mobile" />
              <img className="absolute left-[16%] h-1/3 top-[40%]" src={"/assets/kit-1.svg"} alt="mobile" />
              <img className="absolute right-[5%] h-1/3 top-[40%]" src={"/assets/kit-2.svg"} alt="mobile" />
              <img className="absolute bottom-[0%] w-1/2 right-[20%]" src={"/assets/kit-3.svg"} alt="mobile" />
            </div>
          </motion.div>

          <br />

          <motion.div variants={item} className="report flex flex-col text-left gap-4">
            <motion.h1 variants={item} className="leading-tight text-3xl font-extrabold text-gray-900 mb-2">
              Analytics &{" "}
              <span className="relative inline-block">
                <img
                  src={"/assets/shape.svg"}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/4 top-[90%] -translate-x-1/2 -translate-y-1/2 w-18 h-18 md:w-28 md:h-18 pointer-events-none"
                />
                <span className="relative px-1.5"> Reporting</span>
              </span>
              <br className="hidden md:block" />
              Breakdown
            </motion.h1>

            <motion.p variants={item} className="text-sm text-gray-600 max-w-prose">
              Clear analytics and quick reports to help your team focus.
            </motion.p>

            <motion.div variants={container} className="content flex flex-col gap-4">
              <motion.div variants={item} className="flex gap-4 items-start">
                <div className="p-3 w-12 h-12 rounded-lg flex items-center justify-center flex-none bg-[#FA855C] border border-[#FA855C]">
                  <img className="w-6 h-6 object-contain" height={30} width={30} src={"/assets/time.svg"} alt="time icon" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-gray-900">Automatic Event Tracking</h4>
                  <p className="text-sm text-gray-600">Automatically record events.</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3 items-start">
                <div className="p-3 w-12 h-12 rounded-lg flex items-center justify-center flex-none bg-[#7AD6E1] border border-[#7AD6E1]">
                  <img className="w-6 h-6 object-contain" height={30} width={30} src={"/assets/frame.svg"} alt="frame icon" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-gray-900">Customizable dashboard</h4>
                  <p className="text-sm text-gray-600">Build dashboards you need.</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3 items-start">
                <div className="p-3 w-12 h-12 rounded-lg flex items-center justify-center flex-none bg-[#FFC954] border border-[#FFC954]">
                  <img className="w-6 h-6 object-contain" height={30} width={30} src={"/assets/calendar.svg"} alt="calendar icon" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-gray-900">Statistics retroactively</h4>
                  <p className="text-sm text-gray-600">View historical stats.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <br />
        <br />
      </motion.div>
    </section>
  );
};

export default Report;
