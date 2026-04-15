import React from "react";

const TimeLineCard = ({ event }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow duration-300">
      {/* Icon Section */}
      <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
        {event.icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0">
          <span className="font-bold text-[#39755f] text-base md:text-[17px]">
            {event.contactType}
          </span>
          <span className="text-gray-500 text-sm md:text-base">with</span>
          <span className="text-gray-600 text-sm md:text-[15px] lg:text-[16px] decoration-gray-200 underline-offset-2">
            {event.name}
          </span>
        </div>
        <p className="text-gray-400 text-xs md:text-sm mt-0.5">
          {event.timestamp}
        </p>
      </div>
    </div>
  );
};

export default TimeLineCard;
