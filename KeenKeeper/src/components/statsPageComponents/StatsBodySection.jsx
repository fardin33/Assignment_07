import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "../../index.css";
import { TimeLineContext } from "../../context/TimeLineContext";

const StatsBodySection = () => {
  const { events } = useContext(TimeLineContext);

  const textCount = events.filter(
    (event) => event.contactType === "Text",
  ).length;
  const callCount = events.filter(
    (event) => event.contactType === "Call",
  ).length;
  const videoCount = events.filter(
    (event) => event.contactType === "Video",
  ).length;

  const data = [
    { name: "Text", value: textCount, color: "#1D3227" },
    { name: "Call", value: callCount, color: "#7B39FD" },
    { name: "Video", value: videoCount, color: "#34A853" },
  ];

  // Jodi kono data-i na thake, tobe chart empty dekhabe
  const totalEvents = events.length;

  return (
    <section className="w-[85%] mx-auto pt-12 md:pt-16 lg:pt-20 pb-10 font-sans">
      <h1 className="text-xl md:text-2xl lg:text-[33px] font-bold text-[#111827] mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h2 className="text-[#1E3A2B] font-bold text-lg mb-10">
          By Interaction Type
        </h2>

        <div className="w-full h-64 md:h-80 flex justify-center items-center">
          {totalEvents > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  formatter={(value) => [
                    `${value} (${((value / totalEvents) * 100).toFixed(1)}%)`,
                    "Interactions",
                  ]}
                  contentStyle={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    padding: "10px",
                  }}
                  itemStyle={{ fontWeight: "bold" }}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="95%"
                  paddingAngle={5}
                  cornerRadius={10}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={450}
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-gray-400">No data available for analytics</div>
          )}
        </div>

        {/* Legends */}
        <div className="flex justify-center items-center gap-8 mt-12">
          {data.map((entry, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-[12px] md:text-[13px] lg:text-[15px] font-medium text-gray-500">
                  {entry.name} : {entry.value} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBodySection;
