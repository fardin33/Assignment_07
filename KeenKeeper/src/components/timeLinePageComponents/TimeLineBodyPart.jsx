import React from "react";
import TimeLineCard from "../Ui/TimeLineCard";
import { HiOutlineUserGroup, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";

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
    with: "Tom Baker",
    date: "March 29, 2026",
  },
  {
    icon: <HiOutlineChatAlt2 className="text-xl md:text-2xl text-gray-600" />,
    type: "Text",
    with: "Sarah Chen",
    date: "March 28, 2026",
  },
];

const TimeLineBodyPart = () => {
  return (
    <section className="w-[85%] mx-auto pt-3 md:pt-5 lg:pt-10 pb-10">
      <div className="pt-8 md:pt-12 lg:pt-16 pb-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#111827] tracking-tight">
          TimeLine
        </h1>

        {/* Dropdown Part */}
        <div className="relative inline-block w-full max-w-60 mb-7">
          <div className="dropdown dropdown-end md:dropdown-right">
            {/* Button */}
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 p-3 h-auto min-h-0 md:p-3 lg:p-3 flex items-center gap-2 transition-all"
            >
              <LuFilter className="text-sm md:text-base lg:text-xl" />
              <p className="text-xs md:text-sm lg:text-lg font-normal">
                Filter timeline
              </p>
              <FaChevronDown className="text-[10px] md:text-xs lg:text-sm" />
            </div>

            {/* Dropdown */}
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 md:w-4 lg:w-52 p-2 shadow-xl border border-gray-100"
            >
              <li className="text-xs md:text-sm lg:text-base">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Item 1 clicked");
                  }}
                >
                  Item 1
                </a>
              </li>
              <li className="text-xs md:text-sm lg:text-base">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Item 2 clicked");
                  }}
                >
                  Item 2
                </a>
              </li>
              <li className="text-xs md:text-sm lg:text-base">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Item 3 clicked");
                  }}
                >
                  Item 3
                </a>
              </li>
              <li className="text-xs md:text-sm lg:text-base">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Item 4 clicked");
                  }}
                >
                  Item 4
                </a>
              </li>
              <li className="text-xs md:text-sm lg:text-base">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Item 5 clicked");
                  }}
                >
                  Item 5
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {events.map((event, index) => (
            <TimeLineCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLineBodyPart;
