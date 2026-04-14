import React from "react";

const FriendsCard = ({ friend }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Overdue":
        return "bg-[#EF4444] text-white";
      case "Almost Due":
        return "bg-[#F59E0B] text-white";
      case "On-Track":
        return "bg-[#224236] text-white";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
      {/* Profile Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-50">
        <img
          src={friend.image}
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
            className="bg-[#D1FAE5] text-[#065F46] text-[10.5px] md:text-[11.5px] lg:text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
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
