import React from "react";
import { useLoaderData } from "react-router";

const StatsSection = () => {
  const allFriends = useLoaderData();

  const statsSummary = [
    {
      id: 1,
      label: "Total Friends",
      value: allFriends.length.toString().padStart(2, "0"),
    },
    {
      id: 2,
      label: "On Track",
      value: allFriends
        .filter((f) => f.status === "On Track")
        .length.toString()
        .padStart(2, "0"),
    },
    {
      id: 3,
      label: "Almost Due",
      value: "6", 
    },
    {
      id: 4,
      label: "Need Attention",
      value: "12",
    },
  ];

  return (
    <section className="w-[85%] mx-auto pt-6 md:pt-10 lg:pt-12 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsSummary.map((stat) => (
          <div
            key={stat.id}
            className="bg-white py-8 px-4 rounded-xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md"
          >
            {/* Value */}
            <h2 className="geist text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#224236] leading-none mb-3">
              {stat.value}
            </h2>

            {/* Label Text */}
            <p className="mt-1 text-[#64748B] text-[14.5px] md:text-[15px] lg:text-[16px] font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom subtle divider */}
      <div className="mt-14 border-b border-gray-200 w-full"></div>
    </section>
  );
};

export default StatsSection;
