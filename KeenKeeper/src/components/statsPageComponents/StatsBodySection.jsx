import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const StatsBodySection = () => {
  // Updated static data with your requested colors
  const data = [
    { name: "Text", value: 45, color: "#1D3227" }, // Text Dark
    { name: "Call", value: 30, color: "#7B39FD" }, // Audio Call Purple
    { name: "Video", value: 25, color: "#34A853" }, // Video Green
  ];

  return (
    <section className="w-11/12 mx-auto pt-12 md:pt-16 lg:pt-20 pb-10 font-sans">
      {/* Page Title */}
      <h1 className="text-xl md:text-2xl lg:text-[33px] font-bold text-[#111827] mb-8">
        Friendship Analytics
      </h1>

      {/* Main White Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {/* Section Subtitle */}
        <h2 className="text-[#1E3A2B] font-bold text-lg mb-10">
          By Interaction Type
        </h2>

        {/* Donut Chart Container */}
        <div className="w-full h-64 md:h-80 flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="95%"
                paddingAngle={10}
                cornerRadius={40}
                dataKey="value"
                stroke="none"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center items-center gap-8 mt-12">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-[12px] md:text-[13px] lg:text-[15px] font-medium text-gray-500">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBodySection;
