"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section className="bg-[#FFFFFF]">
      <br />
      <br />
      <div className="w-full sm:max-w-xl md:max-w-4xl relative mx-auto px-4 text-center">
        <img
          className="absolute h-1/3 hidden lg:block top-[0%] right-[10%]"
          src={"/assets/rocket.svg"}
          alt="rocket"
        />
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-extrabold text-gray-900 mb-4"
        >
          Some Excellent{" "}
          <span className="relative inline-block">
            <img
              src={"/assets/shape.svg"}
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 pointer-events-none"
            />
            <span className="relative px-1.5">Features</span>
          </span>{" "}
          For You
        </motion.h2>

        <p className="mt-3 text-gray-600 text-sm">
          Simplify team timekeeping with effortless timers, clear reports, and
          intuitive controls that help teams stay focused{" "}
          <br className="hidden sm:block" />
          and productive.
        </p>

        {/* Feature Grid — animate every time the cards enter view */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}   // <-- run every time it comes into view
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-[#70D0DC] text-white text-left p-6 rounded-2xl shadow-lg flex flex-col gap-2 items-start"
          >
            <div className="p-3 rounded-lg bg-[#FFFFFF80] border-[#FFFFFF80]">
              <img height={30} width={30} src={"/assets/task-lists.svg"} alt="logo" />
            </div>
            <h2 className="text-xl font-semibold">Preset List of Task</h2>
            <p className="text-sm">
              Quickly assign and reuse task templates so teams can start work faster and stay organized.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-[#7562E0] gap-2 text-white text-left p-6 rounded-2xl shadow-lg flex flex-col items-start"
          >
            <div className="p-3 rounded-lg bg-[#FFFFFF80] border-[#FFFFFF80]">
              <img height={30} width={30} src={"/assets/bell-1.svg"} alt="logo" />
            </div>
            <h2 className="text-xl font-semibold">Reminder of Task</h2>
            <p className="text-sm">
              Automated reminders notify team members before deadlines so nothing falls through the cracks.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-[#FA865F] text-left gap-2 text-white p-6 rounded-2xl shadow-lg flex flex-col items-start"
          >
            <div className="p-3 rounded-lg bg-[#FFFFFF80] border-[#FFFFFF80]">
              <img height={30} width={30} src={"/assets/agenda-1.svg"} alt="logo" />
            </div>
            <h2 className="text-xl font-semibold">Complecation Report</h2>
            <p className="text-sm">
              Generate completion reports with actionable insights to measure progress and improve workflows.
            </p>
          </motion.div>
        </div>


      </div>
      <br />
      <br />
    </section>
  );
}
