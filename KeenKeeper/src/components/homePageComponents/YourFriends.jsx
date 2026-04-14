import React from "react";

const YourFriends = () => {
  // Dummy data based :
  const friends = [
    {
      id: 1,
      name: "David Kim",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "Almost Due",
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Emma Wilson",
      lastSeen: "62 Days ago",
      tags: ["FAMILY"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Lisa Nakamura",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "James Wright",
      lastSeen: "62 Days ago",
      tags: ["HOBBY", "TRAVEL"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "David Kim",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      name: "Emma Wilson",
      lastSeen: "62 Days ago",
      tags: ["FAMILY"],
      status: "On-Track",
      image: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      name: "Lisa Nakamura",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "On-Track",
      image: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 8,
      name: "James Wright",
      lastSeen: "62 Days ago",
      tags: ["HOBBY", "TRAVEL"],
      status: "Almost Due",
      image: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 9,
      name: "James Wright",
      lastSeen: "62 Days ago",
      tags: ["HOBBY", "TRAVEL"],
      status: "Almost Due",
      image: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 10,
      name: "David Kim",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 11,
      name: "David Kim",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "Almost Due",
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 12,
      name: "Emma Wilson",
      lastSeen: "62 Days ago",
      tags: ["FAMILY"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 13,
      name: "Lisa Nakamura",
      lastSeen: "62 Days ago",
      tags: ["WORK"],
      status: "Overdue",
      image: "https://i.pravatar.cc/150?u=3",
    },
  ];

  // Status color mapping based on design
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
    <section className="w-[85%] mx-auto py-10">
      <h2 className="geist text-2xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-8 text-left">
        Your Friends
      </h2>

      {/* Grid Layout:  */}
      <div className="mt-3 md:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
          >
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
        ))}
      </div>
    </section>
  );
};

export default YourFriends;
