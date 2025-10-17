import React from "react";

const Tracker = () => {
  return (
    <section className="relative bg-[#F3FDFE] overflow-hidden">

      <br/>
      <br/>
      {/* kept image tags exactly as you originally had them */}
      <img className="absolute border scale-50 left-[-60px] " src={"/assets/chart.svg"} alt="chart" />
      <img className="absolute hidden lg:block border scale-50 right-0" src={"/assets/target.svg"} alt="target" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>How our Tracker work for you</h1>
        <p className="mt-3 text-xs text-gray-600 max-w-3xl mx-auto">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue
          magna at pretium purus pretium ligula
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Features list */}
          <div className="content text-left flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#5BC17F] border-[#5BC17F] shadow-sm flex items-center justify-center">
                <img src={"/assets/minute.svg"} alt="wallet"/>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Time Tracking</h4>
                <p className="text-xs text-gray-600">Time Tracking has never been easier. Just let the stopwatch run</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-transparent shadow-sm flex items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet"/>
              </div>
              <div className="p-3 w-12 h-12 rounded-lg bg-[#FE6292] border-[#FE6292] shadow-sm flex items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet"/>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg">Expenses</h4>
                <p className="text-xs text-gray-600">Track expenses alongside tasks so budgeting stays accurate</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#6B72FF] border-[#6B72FF] shadow-sm flex items-center justify-center">
                <img src={"/assets/wallet.svg"} alt="wallet"/>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Budget controlling</h4>
                <p className="text-xs text-gray-600">Easily set budgets and monitor spending against targets</p>
              </div>
            </div>
          </div>

          {/* Right: Stats / Cards */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="text-sm text-gray-500">Total Earning</h3>
                <div className="mt-2 flex items-end gap-4">
                  <h1 className="text-2xl font-bold">$12,000</h1>
                  <span className="text-green-600 font-medium">+12%</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">Compared to $12,000 last year</p>
              </div>

              <div className="hidden lg:block border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="text-sm text-gray-500">Sales trend</h3>
                <div className="mt-2">
                  <h1 className="text-2xl font-bold">$12,000</h1>
                  <p className="text-xs text-gray-500 mt-1">Compared to $12,000 last year</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-white shadow-sm">
              <h3 className="text-sm text-gray-500">Overall Performance</h3>
              <div className="mt-2 flex items-center justify-between">
                <h1 className="text-2xl font-bold">$12,000</h1>
                <span className="text-green-600 font-medium">+12%</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">Compared to $12,000 last year</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </section>
  );
};

export default Tracker;
