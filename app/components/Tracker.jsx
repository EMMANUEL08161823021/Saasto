"use client";
import React, { useRef, useMemo } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// register required elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// small Utils replacement if you need months (kept minimal)
const Utils = {
  months: ({ count = 12 } = {}) =>
    Array.from({ length: count }, (_, i) => {
      const date = new Date(0, i);
      return date.toLocaleString("default", { month: "long" });
    }),
};

const Tracker = () => {
  const chartRef = useRef(null);

  // === Data (taken from your snippet) ===
  const data = useMemo(
    () => ({
      // Note: If you want to provide explicit label strings for each slice
      // you can set data.labels to an array with length equal to the
      // total number of data points across all datasets.
      labels: [
        /* optionally: 'Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', ... */
      ],
      datasets: [
        {
          label: "Overall",
          backgroundColor: ["#AAA", "#777"],
          data: [21, 79],
        },
        {
          label: "Overall (Breakdown)",
          backgroundColor: ["hsl(0, 100%, 60%)", "hsl(0, 100%, 35%)"],
          data: [33, 67],
        },
        {
          label: "Group A",
          backgroundColor: ["hsl(100, 100%, 60%)", "hsl(100, 100%, 35%)"],
          data: [20, 80],
        },
        {
          label: "Group B",
          backgroundColor: ["hsl(180, 100%, 60%)", "hsl(180, 100%, 35%)"],
          data: [10, 90],
        },
      ],
    }),
    []
  );

  // === Options with robust custom legend label generation and tooltip ===
  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          labels: {
            // custom label generation that flattens datasets -> slices
            generateLabels: function (chart) {
              const items = [];
              // iterate datasets and their data points
              let globalIndex = 0;
              chart.data.datasets.forEach((ds, datasetIndex) => {
                const dsDataLen = (ds.data && ds.data.length) || 0;
                const bg = ds.backgroundColor || [];
                for (let i = 0; i < dsDataLen; i++, globalIndex++) {
                  // pick a color: backgroundColor can be an array or single value
                  let color;
                  if (Array.isArray(bg)) color = bg[i % bg.length];
                  else color = bg;

                  // label text fallback: prefer chart.data.labels[globalIndex] if provided,
                  // otherwise construct from dataset label and index (Yay/Nay)
                  const rawLabel =
                    chart.data.labels && chart.data.labels[globalIndex]
                      ? chart.data.labels[globalIndex]
                      : `${ds.label ?? "Group " + (datasetIndex + 1)} ${
                          i === 0 ? "Yay" : "Nay"
                        }`;

                  items.push({
                    text: rawLabel,
                    fillStyle: color,
                    hidden: !chart.isDatasetVisible(datasetIndex),
                    // provide datasetIndex and the global slice index
                    datasetIndex,
                    index: globalIndex,
                  });
                }
              });
              return items;
            },
          },
          // clicking a legend item toggles the corresponding dataset visibility
          onClick: function (mouseEvent, legendItem, legend) {
            const chart = legend.chart;
            const dsIndex = legendItem.datasetIndex;
            // toggle dataset visibility using Chart.js API
            const currentlyVisible = chart.isDatasetVisible(dsIndex);
            chart.setDatasetVisibility(dsIndex, !currentlyVisible);
            chart.update();
          },
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              // Map (datasetIndex, dataIndex) -> globalIndex (sum of previous dataset lengths + dataIndex)
              if (!context || !context[0]) return "";
              const chart = context[0].chart;
              const datasetIndex = context[0].datasetIndex;
              const dataIndex = context[0].dataIndex;

              let acc = 0;
              for (let i = 0; i < datasetIndex; i++) {
                acc += (chart.data.datasets[i].data || []).length;
              }
              const globalIndex = acc + dataIndex;

              // prefer explicit label if provided in data.labels, otherwise fallback
              const ds = chart.data.datasets[datasetIndex];
              const labelFromData =
                chart.data.labels && chart.data.labels[globalIndex]
                  ? chart.data.labels[globalIndex]
                  : `${ds.label ?? "Group " + (datasetIndex + 1)} ${
                      dataIndex === 0 ? "Yay" : "Nay"
                    }`;

              return labelFromData + ": " + context[0].formattedValue;
            },
          },
        },
        title: {
          display: true,
          text: "Custom Pie (multi-dataset)",
        },
      },
    }),
    []
  );

  const months = [
    { name: "January", value: 8000 },
    { name: "February", value: 10000 },
    { name: "March", value: 12000 },
  ];
  const max = Math.max(...months.map((m) => m.value));

  return (
    <section className="relative bg-[#F3FDFE] overflow-hidden">
      <br />
      <br />
      {/* kept image tags exactly as you originally had them */}
      {/* <img
        className="absolute hidden lg:block scale-50 left-[-5%] "
        src={"/assets/chart.svg"}
        alt="chart"
      />
      <img
        className="absolute hidden lg:block scale-50 right-[0%]"
        src={"/assets/target.svg"}
        alt="target"
      /> */}

      <div className="w-full sm:max-w-xl md:max-w-4xl mx-auto px-6 text-center">
        <h1 className="leading-tight text-3xl font-extrabold text-gray-900 mb-2">
          How our{" "}
          <span className="relative inline-block">
            <img
              src={"/assets/shape.svg"}
              alt=""
              aria-hidden="true"
              className="absolute left-1/4 top-[90%] -translate-x-1/2 -translate-y-1/2 w-18 h-18  md:w-28 md:h-18 pointer-events-none"
            />
            <span className="relative pr-1.5">Tracker</span>
          </span>

          work for you
        </h1>
        <p className="mt-3 text-sm text-gray-600 max-w-3xl mx-auto">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Features list */}
          <div className="content text-left flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#5BC17F] border-[#5BC17F] shadow-sm flex items-center justify-center">
                <img src={"/assets/minute.svg"} alt="wallet" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Time Tracking</h4>
                <p className="text-sm text-gray-600">
                  Time Tracking has never been easier. Just let the stopwatch run
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-transparent shadow-sm flex items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet" />
              </div>
              <div className="p-3 w-12 h-12 rounded-lg bg-[#FE6292] border-[#FE6292] shadow-sm flex items-center justify-center">
                <img src={"/assets/hourglass.svg"} alt="wallet" />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg">Expenses</h4>
                <p className="text-sm text-gray-600">
                  Track expenses alongside tasks so budgeting stays accurate
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 w-12 h-12 rounded-lg bg-[#6B72FF] border-[#6B72FF] shadow-sm flex items-center justify-center">
                <img src={"/assets/wallet.svg"} alt="wallet" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Budget controlling</h4>
                <p className="text-sm text-gray-600">
                  Easily set budgets and monitor spending against targets
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats / Cards */}
          <div className="w-full flex flex-col text-left gap-3">
            <div className="border rounded-lg bg-white p-2">

              <h3 className="text-sm text-gray-900">Sales trend</h3>
              <h1 className="text-xl font-extrabold text-gray-900">$12,755</h1>
              <p className="mt-2 text-sm text-gray-900">Compared to $12,000 last year</p>

              <div className="space-y-4">
                {months.map((m) => {
                  const percent = Math.round((m.value / max) * 100);
                  return (
                    <div key={m.name}>
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-medium text-gray-700">{m.name}</span>
                        <span className="text-xs text-gray-900">{percent}%</span>
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

            </div>
            <div className="border w-full h-max text-left rounded-lg p-4 bg-white shadow-sm">
            <h3 className="text-sm text-gray-900">Global Statistics</h3>
            <p className="mt-2 text-sm text-gray-900">Compared to $12,000 last year</p>

            <div className="mt-4 h-[300px]">
              <Pie ref={chartRef} data={data} options={options} />
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

export default Tracker;
