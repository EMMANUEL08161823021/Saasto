"use client";
import React, { useRef, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// register required elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

/**
 * 1) Custom center text plugin
 *    - Draws a large percentage and a small label in the middle of the doughnut
 */
const centerTextPlugin = {
  id: "centerText",
  afterDraw: (chart) => {
    const { ctx, chartArea } = chart;
    const { left, right, top, bottom } = chartArea;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    // Choose the dataset to derive the "overall" metric from (we use dataset 0 here)
    const ds0 = chart.data.datasets[0];
    const yes = (ds0?.data?.[0] ?? 0);
    const total = (ds0?.data ?? []).reduce((a, b) => a + b, 0) || 1;
    const percent = Math.round((yes / total) * 100);

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Large percent
    ctx.fillStyle = "#0f172a"; // gray-900
    ctx.font = "700 26px Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
    ctx.fillText(`${percent}%`, centerX, centerY - 6);

    // Small label under percent
    ctx.fillStyle = "#475569"; // gray-600
    ctx.font = "500 12px Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
    ctx.fillText("Overall Positive", centerX, centerY + 18);

    ctx.restore();
  },
};

/**
 * 2) Shadow plugin: applies a subtle drop-shadow to the slices for depth
 *    - toggled on/off via options.plugins.sliceShadow
 */
const sliceShadowPlugin = {
  id: "sliceShadow",
  beforeDatasetsDraw(chart, args, options) {
    const ctx = chart.ctx;
    // Save values and apply shadow
    ctx.save();
    ctx.shadowColor = options?.color ?? "rgba(2,6,23,0.12)";
    ctx.shadowBlur = options?.blur ?? 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 6;
  },
  afterDatasetsDraw(chart) {
    // restore so other drawings aren't affected
    chart.ctx.restore();
  },
};

// Register plugins (so Chart.js knows about them)
ChartJS.register(centerTextPlugin, sliceShadowPlugin);

const Tracker = () => {
  const chartRef = useRef(null);
  // local state to force rerender when toggling legend items, purely for UI refresh
  const [, setTick] = useState(0);

  // === Data (multi-dataset slices) ===
  const data = useMemo(
    () => ({
      // we intentionally leave `labels` blank because we render a custom legend
      labels: [],
      datasets: [
        { label: "Overall", backgroundColor: ["#ffffff", "#9CA3AF"], data: [21, 79] },
        { label: "Overall (Breakdown)", backgroundColor: ["#ffffff", "#F43F5E"], data: [33, 67] },
        { label: "Group A", backgroundColor: ["#ffffff", "#34D399"], data: [20, 80] },
      ],
    }),
    []
  );

  // === Chart options with styling ===
  const options = useMemo(
    () => ({
      type: "doughnut",
      responsive: true,
      maintainAspectRatio: false,
      cutout: "65%", // ring thickness
      rotation: -90, // start at top (-90deg)
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 850,
        easing: "easeOutQuart",
      },
      elements: {
        arc: {
          borderWidth: 2,
          borderColor: "#ffffff", // crisp white separators between slices
          hoverOffset: 12, // slice pops out on hover
        },
      },
      layout: {
        padding: 8,
      },
      plugins: {
        // disable built-in legend because we render our own styled legend
        legend: { display: false },
        tooltip: {
          padding: 10,
          bodySpacing: 6,
          titleFont: { size: 13, weight: "600" },
          bodyFont: { size: 12 },
          callbacks: {
            // Show dataset label + slice label (Yay/Nay) and value
            label: (ctx) => {
              const ds = ctx.dataset;
              const sliceIndex = ctx.dataIndex; // 0 or 1 (yay/nay)
              const dsLabel = ds.label ?? `Group ${ctx.datasetIndex + 1}`;
              const sliceLabel = sliceIndex === 0 ? "Yay" : "Nay";
              const value = ds.data[sliceIndex] ?? 0;
              return `${dsLabel} — ${sliceLabel}: ${value}%`;
            },
          },
        },
        // our custom plugins with options
        sliceShadow: { color: "rgba(2,6,23,0.12)", blur: 12 },
        centerText: {}, // no options needed
      },
    }),
    []
  );

  // Build a flattened legend model we can style any way we want
  // Each dataset provides two slices (Yay / Nay)
  const legendItems = useMemo(() => {
    const items = [];
    data.datasets.forEach((ds, datasetIndex) => {
      const dsColors = Array.isArray(ds.backgroundColor) ? ds.backgroundColor : [ds.backgroundColor];
      const dsValues = Array.isArray(ds.data) ? ds.data : [ds.data];
      const total = dsValues.reduce((a, b) => a + b, 0) || 1;
      const yay = dsValues[0] ?? 0;
      const yayPercent = Math.round((yay / total) * 100);
      items.push({
        datasetIndex,
        label: ds.label,
        color: dsColors[1] ?? dsColors[0],
        yayPercent,
        hidden: false,
      });
    });
    return items;
  }, [data]);

  // Toggle dataset visibility (wired to the custom legend)
  const toggleDataset = (dsIndex) => {
    const chart = chartRef.current;
    if (!chart) return;
    const visible = chart.isDatasetVisible(dsIndex);
    chart.setDatasetVisibility(dsIndex, !visible);
    chart.update();
    // force a tiny state tick to refresh local legend UI if needed
    setTick((t) => t + 1);
  };

  // Months & progress bars (unchanged)
  const months = [
    { name: "January", value: 8000 },
    { name: "February", value: 10000 },
    { name: "March", value: 12000 },
  ];
  const max = Math.max(...months.map((m) => m.value));

  return (
    <motion.section
      className="relative bg-[#F3FDFE] overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      // variants={sectionVariants}
    >
      <br/>
      <br/>
      <div className="w-full sm:max-w-xl md:max-w-4xl mx-auto px-6 text-center py-10">
        <motion.h1
          className="leading-tight text-3xl font-extrabold text-gray-900 mb-2"
          // 
        >
          How our{" "}
          <span className="relative inline-block">
            <img
              src={"/assets/shape.svg"}
              alt=""
              aria-hidden="true"
              className="absolute left-1/4 top-[90%] -translate-x-1/2 -translate-y-1/2 w-18 h-18 md:w-28 md:h-18 pointer-events-none"
            />
            <span className="relative pr-1.5">Tracker</span>
          </span>
          {" "}work for you
        </motion.h1>

        <motion.p
          className="mt-3 text-sm text-gray-600 max-w-3xl mx-auto"
          // 
        >
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue
          magna at pretium purus pretium ligula
        </motion.p>

        <div className="mt-10 flex w-[100%] flex-col md:flex-row items-start justify-between gap-6">
          {/* Left: Features list */}
          <motion.div
            className="content w-full md:w-[45%] text-left flex flex-col gap-6"
            // 
          >
            <motion.div className="flex gap-4 items-start">
              <div className="p-3 w-15 h-12 rounded-lg bg-[#5BC17F] border-[#5BC17F] shadow-sm flex items-center justify-center">
                <img src={"/assets/minute.svg"} alt="wallet" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Time Tracking</h4>
                <p className="text-sm text-gray-600">
                  Time Tracking has never been easier. Just let the stopwatch run
                </p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start">
              {/* <div className="opacity-0 hidden md:flex p-3 w-12 h-12 rounded-lg bg-transparent shadow-sm items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet" />
              </div> */}
              <div className="p-3 w-15 h-12 rounded-lg bg-[#FE6292] border-[#FE6292] shadow-sm flex items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet" />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg">Expenses</h4>
                <p className="text-sm text-gray-600">
                  Track expenses alongside tasks so budgeting stays accurate
                </p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start" >
              <div className="p-3 w-15 h-12 rounded-lg bg-[#6B72FF] border-[#6B72FF] shadow-sm flex items-center justify-center">
                <img src={"/assets/wallet.svg"} alt="wallet" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Budget controlling</h4>
                <p className="text-sm text-gray-600">
                  Easily set budgets and monitor spending against targets
                </p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start">
              {/* <div className="opacity-0 hidden md:flex p-3 w-12 h-12 rounded-lg bg-transparent shadow-sm items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet" />
              </div> */}
              <div className="p-3 w-15 h-12 rounded-lg bg-[#FE6292] border-[#FE6292] shadow-sm flex items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet" />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg">Expenses</h4>
                <p className="text-sm text-gray-600">
                  Track expenses alongside tasks so budgeting stays accurate
                </p>
              </div>
            </motion.div>
            {/* <motion.div className="flex gap-4 items-start" >
              <div className="p-3 w-12 h-12 rounded-lg bg-[#6B72FF] border-[#6B72FF] shadow-sm flex items-center justify-center">
                <img src={"/assets/wallet.svg"} alt="wallet" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Budget controlling</h4>
                <p className="text-sm text-gray-600">
                  Easily set budgets and monitor spending against targets
                </p>
              </div>
            </motion.div> */}
          </motion.div>
          <div className="w-[100%] md:w-[45%] flex flex-col items-start gap-3">
            {/* Left: features + progress bars */}
            {/* <div className="text-left border w-full space-y-6">
              <div className="p-4 rounded-lg bg-white shadow">
                <h3 className="text-sm text-gray-700">Sales trend</h3>
                <h2 className="text-2xl font-extrabold text-gray-900">$12,755</h2>
                <p className="text-sm text-gray-600 mt-2">Compared to $12,000 last year</p>

                <div className="mt-4 space-y-4">
                  {months.map((m, i) => {
                    const percent = Math.round((m.value / max) * 100);
                    return (
                      <div key={m.name}>
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-medium text-gray-700">{m.name}</span>
                          <span className="text-sm text-gray-900">{percent}%</span>
                        </div>

                        <div role="progressbar" aria-label={`${m.name} progress`} className="mt-2 h-2.5 w-full rounded-md bg-gray-100 overflow-hidden">
                          <motion.div
                            className="h-full rounded-md"
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            style={{
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
              </div>
            </div> */}

            {/* Right: Chart + custom legend */}
            <div className="relative p-4 md:h-[350px] w-full rounded-xl bg-white shadow-lg flex flex-col items-center justify-center">
              <div>

              <Doughnut ref={chartRef} data={data} options={options} />
              </div>
              <div className="flex flex-col md:flex-row flex-wrap gap-1">
                {data.datasets.map((ds, idx) => {
                  const dsValues = Array.isArray(ds.data) ? ds.data : [ds.data];
                  const total = dsValues.reduce((a, b) => a + b, 0) || 1;
                  const yay = dsValues[0] ?? 0;
                  const yayPercent = Math.round((yay / total) * 100);
                  const color = Array.isArray(ds.backgroundColor) ? ds.backgroundColor[1] ?? ds.backgroundColor[0] : ds.backgroundColor;

                  // check visibility using chart instance (guarded)
                  const chart = chartRef.current;
                  const visible = chart ? chart.isDatasetVisible(idx) : true;

                  return (
                    <button
                      key={ds.label + idx}
                      onClick={() => toggleDataset(idx)}
                      className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-gray-50 focus:outline-none"
                      aria-pressed={!visible}
                    >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-3 h-3 rounded-full ring-1 ring-white shadow-sm"
                          style={{ background: color }}
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-800">{ds.label}</div>
                          <div className="text-sm text-gray-500">Yay {yayPercent}%</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className={`text-sm px-2 py-0.5 rounded ${visible ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          {visible ? "Visible" : "Hidden"}
                        </div>
                        <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* <div className=""> */}
              {/* Chart Card */}
          </div>
        {/* </div> */}
        </div>
      </div>
      <br/>
      <br/>


    </motion.section>
  );
};

export default Tracker;

   