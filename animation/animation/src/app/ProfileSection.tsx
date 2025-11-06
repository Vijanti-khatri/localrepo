"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

// Sample data
const lineData = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 50 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 90 },
];

const pieData = [{ value: 22 }, { value: 78 }];
const COLORS = ["#3b82f6", "#e5e7eb"]; // blue + light gray

export default function ProfileSection() {
  return (
    <section className="w-full flex justify-center items-center py-10 px-4 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white border border-gray-200  rounded-3xl shadow-xl max-w-5xl w-full flex flex-col md:flex-row items-center overflow-hidden p-8 md:p-12"
      >
        {/* Left Section - Stats */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 grid grid-cols-2 gap-4"
        >
          {/* Temp Box */}
          <div className="bg-gradient-to-tr from-orange-400 to-orange-500 text-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-md hover:scale-105 transition-all duration-300">
            <span className="text-lg font-medium">36°</span>
            <span className="text-sm">Temp</span>
          </div>

          {/* Heart Rate Box */}
          <div className="bg-gradient-to-tr from-purple-500 to-pink-500 text-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-md hover:scale-105 transition-all duration-300">
            <span className="text-lg font-medium">65 ❤</span>
            <span className="text-sm">BPM</span>
          </div>

          {/* Steps */}
          <div className="col-span-2 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-300 p-4">
            <h3 className="text-gray-600 text-sm">Steps</h3>
            <p className="text-2xl font-bold text-gray-800">6,437</p>
            <div className="flex justify-between text-xs mt-2 text-gray-500">
              <span>Grain ↑</span>
              <span>Carbs ↔</span>
              <span>Sugar ↗</span>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Profile (No shadow) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <Image
              src="/pics/pic11-removebg-preview.png"
              alt="Profile"
              width={280}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* Right Section - Goals */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex-1 flex flex-col gap-4 mt-8 md:mt-0"
        >
          {/* Line Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-300 p-6">
            <h3 className="text-xl font-bold text-gray-800">Goals</h3>
            <p className="text-sm text-gray-500">44’ Recap</p>
            <div className="mt-3 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    dot={false}
                    animationDuration={1000}
                    
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Water Intake Circle */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center relative">
            <h3 className="text-sm text-gray-500">H2O</h3>
            <div className="w-24 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={35}
                    outerRadius={50}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="absolute text-xl font-bold text-blue-500 mt-12">22%</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
