import React, { useContext, useState } from "react";
import TimeLineCard from "../Ui/TimeLineCard";
import { HiOutlineUserGroup, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";
import { TimeLineContext } from "../../context/TimeLineContext";

const TimeLineBodyPart = () => {
  const { events } = useContext(TimeLineContext);

  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.contactType === filter);

  return (
    <section className="w-[85%] mx-auto pt-3 md:pt-5 lg:pt-10 pb-10">
      <div className="pt-8 md:pt-12 lg:pt-16 pb-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#111827] tracking-tight">
          TimeLine
        </h1>

        {/* Dropdown Part */}
        <div className="relative inline-block w-full max-w-60 mb-7">
          <div className="dropdown dropdown-right dropdown-end md:dropdown-right">
            {/* Button */}
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 p-3 h-auto min-h-0 md:p-3 lg:p-3 flex items-center gap-2 transition-all"
            >
              <LuFilter className="text-sm md:text-base lg:text-xl" />
              <p className="text-xs md:text-sm lg:text-lg font-normal">
                {filter === "All" ? "Filter timeline" : `Showing: ${filter}`}
              </p>
              <FaChevronDown className="text-[10px] md:text-xs lg:text-sm" />
            </div>

            {/* Dropdown */}
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 md:w-52 p-2 shadow-xl border border-gray-100"
            >
              <li>
                <a onClick={() => setFilter("All")}>All</a>
              </li>
              <li>
                <a onClick={() => setFilter("Text")}>Text</a>
              </li>
              <li>
                <a onClick={() => setFilter("Call")}>Call</a>
              </li>
              <li>
                <a onClick={() => setFilter("Video")}>Video</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Cards Grid */}

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <TimeLineCard key={index} event={event} />
            ))
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400">Timeline Data Not Found !!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimeLineBodyPart;
