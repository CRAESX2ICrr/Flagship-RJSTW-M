"use client";

import { useMemo, useState } from "react";

function DeviceCard({ brand, model }) {
  return (
    <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-sm">B</span>
        </div>
        <div>
          <div className="text-sm text-gray-400 tracking-wide">
            {brand || "Brand"}
          </div>
          <div className="text-xl font-semibold text-white">
            {model || "Model"}
          </div>
        </div>
      </div>

      {/* Image area */}
      <div className="w-64 h-64 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/10">
        <span className="text-gray-400 text-sm">No Image</span>
      </div>
    </div>
  );
}

export default function ComparePage() {
  const [leftBrand, setLeftBrand] = useState("");
  const [leftModel, setLeftModel] = useState("");
  const [rightBrand, setRightBrand] = useState("");
  const [rightModel, setRightModel] = useState("");

  const leftModels = useMemo(() => [], [leftBrand]);
  const rightModels = useMemo(() => [], [rightBrand]);

  const canCompare = leftBrand && leftModel && rightBrand && rightModel;

  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Compare Devices
        </h1>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <DeviceCard brand={leftBrand} model={leftModel} />
          <DeviceCard brand={rightBrand} model={rightModel} />
        </div>

        {/* Selection panel */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left selectors */}
            <div>
              <h3 className="text-sm text-gray-300 mb-3 font-medium uppercase tracking-wide">
                Left Device
              </h3>

              <select
                value={leftBrand}
                onChange={(e) => {
                  setLeftBrand(e.target.value);
                  setLeftModel("");
                }}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 pr-22 text-white text-sm focus:ring-2 focus:ring-cyan-400 outline-none transition mb-3"
              >
                <option value="">Select Brand</option>
              </select>

              <select
                value={leftModel}
                onChange={(e) => setLeftModel(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 pr-8 text-white text-sm focus:ring-2 focus:ring-cyan-400 outline-none transition"
                disabled={!leftBrand}
              >
                <option value="">Select Model</option>
              </select>
            </div>

            {/* Right selectors */}
            <div>
              <h3 className="text-sm text-gray-300 mb-3 font-medium uppercase tracking-wide">
                Right Device
              </h3>

              <select
                value={rightBrand}
                onChange={(e) => {
                  setRightBrand(e.target.value);
                  setRightModel("");
                }}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 pr-8 text-white text-sm focus:ring-2 focus:ring-cyan-400 outline-none transition mb-3"
              >
                <option value="">Select Brand</option>
              </select>

              <select
                value={rightModel}
                onChange={(e) => setRightModel(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 pr-8 text-white text-sm focus:ring-2 focus:ring-cyan-400 outline-none transition"
                disabled={!rightBrand}
              >
                <option value="">Select Model</option>
              </select>
            </div>
          </div>

          {/* Compare button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              disabled={!canCompare}
              className={`rounded-xl px-8 py-3 font-semibold tracking-wide transition-all ${
                canCompare
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-white hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:scale-[1.02]"
                  : "bg-white/10 text-gray-400 cursor-not-allowed"
              }`}
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
