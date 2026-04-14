import React from "react";

const StatsSection = () => {
  const stats = [
    { id: 1, value: "10", label: "Total Friends" },
    { id: 2, value: "3", label: "On Track" },
    { id: 3, value: "6", label: "Need Attention" },
    { id: 4, value: "12", label: "Interactions This Month" },
  ];

  return (
    <section className="w-[80%] mx-auto pt-6 md:pt-10 lg:pt-12 pb-10">
      {/* Container with responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white py-8 px-4 rounded-xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md"
          >
            {/* Value/Number */}
            <h2 className="geist text-2xl md:text-3xl lg:text-4xl font-bold text-[#224236] leading-none mb-3">
              {stat.value}
            </h2>

            {/* Label */}
            <p className="mt-1 text-[#64748B] text-[14.5px] md:text-[15px] lg:text-[16px] font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom subtle divider from your image */}
      <div className="mt-14 border-b-2 border-gray-200 w-full"></div>
    </section>
  );
};

export default StatsSection;
