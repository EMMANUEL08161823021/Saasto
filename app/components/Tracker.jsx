"use client"
import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Small utility bundle similar to your Utils
const CHART_COLORS = {
  red: "#ef4444",
  white: "#FFF",
  orange: "#f97316",
  yellow: "#f59e0b",
  green: "#10b981",
  blue: "#3b82f6",
};

const Utils = {
  rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  numbers: ({ count, min, max }) =>
    Array.from({ length: count }, () => Utils.rand(min, max)),
  CHART_COLORS,
};

// safe deep clone (structuredClone if available, fallback to JSON)
const deepClone = (obj) =>
  typeof structuredClone !== "undefined"
    ? structuredClone(obj)
    : JSON.parse(JSON.stringify(obj));


const Tracker = () => {

    const chartRef = useRef(null);

  const initial = {
    labels: ["Red", "Orange", "Yellow", "White", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers({ count: 5, min: 0, max: 100 }),
        backgroundColor: Object.values(CHART_COLORS),
      },
    ],
  };

  const [chartData, setChartData] = useState(initial);

  // Actions
  const randomize = () => {
    setChartData((prev) => {
      const next = deepClone(prev);
      next.datasets.forEach((ds) => {
        ds.data = Utils.numbers({ count: next.labels.length, min: 0, max: 100 });
      });
      return next;
    });
  };

  const addDataset = () => {
    setChartData((prev) => {
      const next = deepClone(prev);
      const colors = Object.values(CHART_COLORS);
      const newDS = {
        label: `Dataset ${next.datasets.length + 1}`,
        data: next.labels.map(() => Utils.rand(0, 100)),
        backgroundColor: next.labels.map((_, i) => colors[i % colors.length]),
      };
      next.datasets.push(newDS);
      return next;
    });
  };

  const addData = () => {
    setChartData((prev) => {
      const next = deepClone(prev);
      next.labels.push(`data #${next.labels.length + 1}`);
      next.datasets.forEach((ds) => ds.data.push(Utils.rand(0, 100)));
      return next;
    });
  };

  const hideDataset = (indexes) => {
    setChartData((prev) => {
      const next = deepClone(prev);
      const idxs = Array.isArray(indexes) ? indexes : [indexes];
      idxs.forEach((i) => {
        if (next.datasets[i]) next.datasets[i].hidden = true;
      });
      return next;
    });
  };

  const showDataset = (indexes) => {
    setChartData((prev) => {
      const next = deepClone(prev);
      const idxs = Array.isArray(indexes) ? indexes : [indexes];
      idxs.forEach((i) => {
        if (next.datasets[i]) delete next.datasets[i].hidden;
      });
      return next;
    });
  };

  const removeDataset = () => {
    setChartData((prev) => {
      const next = deepClone(prev);
      next.datasets.pop();
      return next;
    });
  };

  const removeData = () => {
    setChartData((prev) => {
      const next = deepClone(prev);
      next.labels.pop();
      next.datasets.forEach((ds) => ds.data.pop());
      return next;
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Chart.js Doughnut Chart (Actions)" },
    },
  };

  const months = [
    { name: "January", value: 8000 },
    { name: "February", value: 10000 },
    { name: "March", value: 12000 },
  ];
  const max = Math.max(...months.map((m) => m.value));

  return (


    <section className="relative bg-[#F3FDFE] overflow-hidden">

      <br/>
      <br/>
      {/* kept image tags exactly as you originally had them */}
      <img className="absolute border scale-50 left-[-60px] " src={"/assets/chart.svg"} alt="chart" />
      <img className="absolute hidden lg:block border scale-50 right-0" src={"/assets/target.svg"} alt="target" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>
          How our 
          <span className="relative inline-block">
            <img
              src={"/assets/shape.svg"}
              alt=""
              aria-hidden="true"
              className="absolute left-1/4 top-[90%] -translate-x-1/2 -translate-y-1/2 w-18 h-18  md:w-28 md:h-18 pointer-events-none"
            />
            <span className="relative pr-1.5">Tracker</span>
          </span>
          
          work for you</h1>
        <p className="mt-3 text-sm text-gray-600 max-w-3xl mx-auto">
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
                <p className="text-sm text-gray-600">Time Tracking has never been easier. Just let the stopwatch run</p>
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
                <p className="text-sm text-gray-600">Track expenses alongside tasks so budgeting stays accurate</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#6B72FF] border-[#6B72FF] shadow-sm flex items-center justify-center">
                <img src={"/assets/wallet.svg"} alt="wallet"/>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Budget controlling</h4>
                <p className="text-sm text-gray-600">Easily set budgets and monitor spending against targets</p>
              </div>
            </div>
          </div>

          {/* Right: Stats / Cards */}
          <div className="flex flex-col gap-4">
            <div className="border text-left rounded-lg p-4 bg-white shadow-sm">
              <h3 className="text-sm text-gray-900">Sales trend</h3>
              <h1 className="text-sm text-gray-900">$12,755</h1>
              <p className="mt-2 text-sm text-gray-900">Compared to $12,000 last year</p>


              <div className="mt-3 space-y-4">
                {months.map((m) => {
                  const percent = Math.round((m.value / max) * 100);
                  return (
                    <div key={m.name}>
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-medium text-gray-700">{m.name}</span>
                        <span className="text-xs text-gray-500">${m.value.toLocaleString()} • {percent}%</span>
                      </div>

                      <div
                        role="progressbar"
                        aria-label={`${m.name} progress`}
                        aria-valuenow={percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-2 h-2.5 w-full rounded-md bg-gray-100"
                      >
                        <div
                          className="h-full rounded-md transition-all duration-700"
                          style={{
                            width: `${percent}%`,
                            background:
                              m.name === "January"
                                ? "linear-gradient(90deg,#60a5fa,#3b82f6)"
                                : m.name === "February"
                                ? "linear-gradient(90deg,#34d399,#10b981)"
                                : "linear-gradient(90deg,#fb923c,#f97316)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-sm text-gray-500 mt-3">Monthly earnings for Q1 (January — March)</p>
            </div>


            <div className="border rounded-lg p-4 bg-white shadow-sm">
              <h3 className="text-sm text-gray-500">Overall Performance</h3>

              <div className="mt-2 flex items-center justify-between">
                <h1 className="text-2xl font-bold">$12,000</h1>
                <span className="text-green-600 font-medium">+12%</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">Compared to $12,000 last year</p>

              {/* actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={randomize} className="px-3 py-1 rounded bg-gray-100 text-sm">Randomize</button>
                <button onClick={addDataset} className="px-3 py-1 rounded bg-gray-100 text-sm">Add Dataset</button>
                <button onClick={addData} className="px-3 py-1 rounded bg-gray-100 text-sm">Add Data</button>
                <button onClick={() => hideDataset(0)} className="px-3 py-1 rounded bg-gray-100 text-sm">Hide(0)</button>
                <button onClick={() => showDataset(0)} className="px-3 py-1 rounded bg-gray-100 text-sm">Show(0)</button>
                <button onClick={() => hideDataset([0,1])} className="px-3 py-1 rounded bg-gray-100 text-sm">Hide(0,1)</button>
                <button onClick={() => showDataset([0,1])} className="px-3 py-1 rounded bg-gray-100 text-sm">Show(0,1)</button>
                <button onClick={removeDataset} className="px-3 py-1 rounded bg-gray-100 text-sm">Remove Dataset</button>
                <button onClick={removeData} className="px-3 py-1 rounded bg-gray-100 text-sm">Remove Data</button>
              </div>

              {/* chart */}
              <div className="mt-4 h-56">
                <Doughnut ref={chartRef} data={chartData} options={options} />
              </div>
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
