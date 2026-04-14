import React from "react";
import {
  HiChevronDown,
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineVideoCamera,
  HiOutlinePhone,
} from "react-icons/hi";

const events = [
  {
    icon: <HiOutlineUserGroup className="text-xl md:text-2xl text-gray-600" />,
    type: "Meetup",
    with: "Tom Baker",
    date: "March 29, 2026",
  },
  {
    icon: <HiOutlineChatAlt2 className="text-xl md:text-2xl text-gray-600" />,
    type: "Text",
    with: "Sarah Chen",
    date: "March 28, 2026",
  },
  {
    icon: <HiOutlineUserGroup className="text-xl md:text-2xl text-gray-600" />,
    type: "Meetup",
    with: "Olivia Martinez",
    date: "March 26, 2026",
  },
  {
    icon: (
      <HiOutlineVideoCamera className="text-xl md:text-2xl text-gray-600" />
    ),
    type: "Video",
    with: "Aisha Patel",
    date: "March 23, 2026",
  },
  {
    icon: <HiOutlineUserGroup className="text-xl md:text-2xl text-gray-600" />,
    type: "Meetup",
    with: "Sarah Chen",
    date: "March 21, 2026",
  },
  {
    icon: <HiOutlinePhone className="text-xl md:text-2xl text-gray-600" />,
    type: "Call",
    with: "Marcus Johnson",
    date: "March 19, 2026",
  },
  {
    icon: <HiOutlineUserGroup className="text-xl md:text-2xl text-gray-600" />,
    type: "Meetup",
    with: "Aisha Patel",
    date: "March 17, 2026",
  },
  {
    icon: <HiOutlineChatAlt2 className="text-xl md:text-2xl text-gray-600" />,
    type: "Text",
    with: "Olivia Martinez",
    date: "March 13, 2026",
  },
  {
    icon: <HiOutlinePhone className="text-xl md:text-2xl text-gray-600" />,
    type: "Call",
    with: "Lisa Nakamura",
    date: "March 11, 2026",
  },
  {
    icon: <HiOutlinePhone className="text-xl md:text-2xl text-gray-600" />,
    type: "Call",
    with: "Sarah Chen",
    date: "March 11, 2026",
  },
  {
    icon: (
      <HiOutlineVideoCamera className="text-xl md:text-2xl text-gray-600" />
    ),
    type: "Video",
    with: "Marcus Johnson",
    date: "March 6, 2026",
  },
  {
    icon: (
      <HiOutlineVideoCamera className="text-xl md:text-2xl text-gray-600" />
    ),
    type: "Video",
    with: "Ryan O'Brien",
    date: "February 24, 2026",
  },
];

const TimeLine = () => {
  return (
    <section className="w-[85%] mx-auto pt-6 md:pt-10 lg:pt-12 pb-10">
      <div className="pt-8 md:pt-12 lg:pt-16 pb-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#111827] tracking-tight">
          TimeLine
        </h1>

        {/* Dropdown Part */}
        <div className="relative inline-block w-full max-w-60 mb-10">
          <select className="appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all cursor-pointer text-sm font-medium">
            <option value="">Filter timeline</option>
            <option value="meetup">Meetups</option>
            <option value="calls">Calls</option>
            <option value="videos">Videos</option>
            <option value="texts">Texts</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <HiChevronDown size={18} />
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-xl flex items-center justify-center shrink-0">
                {event.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0">
                  <span className="font-bold text-[#1F2937] text-base md:text-[17px]">
                    {event.type}
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    with
                  </span>
                  <span className="text-gray-600 font-medium text-sm md:text-base underline decoration-gray-200 underline-offset-2">
                    {event.with}
                  </span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
