"use client"
import React, { useState } from "react";

const Flexible = () => {
  // billing: "monthly" or "yearly"
  const [billing, setBilling] = useState("monthly");

  // Prices: keep the Free plan at $0, Premium changes
  const premiumMonthly = 3; // $3 / mo
  const premiumYearly = 30; // $30 / yr

  const isYearly = billing === "yearly";

  return (
    <section className="relative bg-white overflow-hidden">
      <br />
      <br />
      <img className="absolute hidden md:block w-1/8 left-[0%] top-[45%]" src={"/assets/Hand.svg"} alt="alt" />


      <div className="w-full sm:max-w-xl md:max-w-4xl h-[100%] mx-auto px-4">
        <div className="relative text-center py-8 md:py-12 rounded-lg">
          {/* decorative right image (hidden on small screens) */}
          <img className="absolute w-1/7 hidden md:block right-[12%] top-[24%]" src={"/assets/chess.png"} alt="alt" />

          <h1 className="leading-tight text-3xl font-extrabold z-20 text-gray-900 mb-2">
            Flexible work, <br className="block sm:hidden"/>Simple 
            <span className="relative inline-block">
                <img
                src={"/assets/shape.svg"}
                alt=""
                aria-hidden="true"
                className="absolute left-1/4 top-[85%] -translate-x-1/2 -translate-y-1/2 w-18 h-18  md:w-28 md:h-18 pointer-events-none"
                />
                <span className="relative px-1.5"> Price</span>
            </span>
          </h1>

          <p className="mt-3 text-sm md:text-base text-gray-600">Growth your business with using us</p>

          {/* Toggle */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? "font-semibold text-gray-900" : "text-gray-500"}`}>Monthly</span>

            {/* accessible switch */}
            <button
              role="switch"
              aria-checked={isYearly}
              onClick={() => setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))}
              className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
                isYearly ? "bg-[#FF553E]" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>

            <span className={`text-sm ${isYearly ? "font-semibold text-gray-900" : "text-gray-500"}`}>Yearly</span>
          </div>

          <div className="mt-6 max-w-xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {/* Free Card */}
            <div
              className="flex h-[300px] flex-col rounded-xl sm:rounded-4xl items-center justify-center p-4 md:p-6 border border-[#FF553E] w-full md:w-1/2"
            //   style={{ borderRadius: "60px" }}
            >
              <div className="text-center">
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="text-lg font-semibold text-gray-900">Free</h2>
                  <h3 className="text-sm text-gray-600">1 seat</h3>
                  <h3 className="text-sm text-gray-600">2 projects</h3>
                </div>
                {/* Free stays the same */}
                <p className="mt-3 text-2xl font-bold text-gray-900">
                  $0
                  <sub className="text-sm font-extralight">/forever</sub>
                </p>
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 rounded-full text-sm bg-[#FF553E] text-white shadow hover:brightness-95 transition">
                  Start 14 Days Trial
                </button>
              </div>
            </div>

            {/* Premium Card (prices change based on toggle) */}
            <div
              className="flex h-[300px] flex-col rounded-xl sm:rounded-4xl z-10 items-center justify-center p-4 md:p-6 w-full md:w-1/2 bg-[#FF553E] text-white"
            //   style={{ borderRadius: "60px" }}
            >
              <div className="text-center">
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="text-lg font-semibold">Premium</h2>
                  <h3 className="text-sm">Unlimited seats</h3>
                  <h3 className="text-sm">Unlimited projects</h3>
                </div>

                <p className="mt-3 text-2xl font-bold">
                  {isYearly ? `$${premiumYearly}` : `$${premiumMonthly}`}
                  <sub className="text-sm font-extralight">{isYearly ? "/yr" : "/mo"}</sub>
                </p>
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm rounded-full bg-white text-[#FF553E] shadow hover:opacity-90 transition">
                  Start 14 Days Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Flexible;
