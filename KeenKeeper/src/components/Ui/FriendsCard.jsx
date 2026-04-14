import React from "react";
import { Link, useNavigate } from "react-router";

const FriendsCard = ({ friend }) => {
  const navigate = useNavigate();

  
  const getStatusStyles = (status) => {
    return status === "Overdue"
      ? "bg-[#D14F4F] text-white"
      : status === "Almost Due"
        ? "bg-[#ddae47] text-white"
        : status === "On Track"
          ? "bg-[#186952] text-white"
          : "bg-gray-100 text-gray-600";
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 cursor-pointer"
    >
      {/* Profile Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-50">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Time */}
      <h3 className="geist text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1F2937]">
        {friend.name}
      </h3>
      <p className="text-[13.5px] md:text-[14.5px] lg:text-[15px] text-gray-500 mb-3">
        {friend.lastSeen}
      </p>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#D1FAE5] text-[#18644f] text-[10.5px] md:text-[11.5px] lg:text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <span
        className={`text-[10.5px] md:text-[11.5px] lg:text-[12px] font-bold px-4 py-1.5 rounded-full shadow-sm ${getStatusStyles(friend.status)}`}
      >
        {friend.status}
      </span>
    </div>
  );
};

export default FriendsCard;
