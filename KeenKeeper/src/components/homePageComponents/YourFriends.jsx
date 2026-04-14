import React from "react";
import FriendsCard from "../Ui/FriendsCard";

const YourFriends = () => {
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

  return (
    <section className="w-[85%] mx-auto py-10">
      <h2 className="geist text-2xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-8 text-left">
        Your Friends
      </h2>

      <div className="mt-3 md:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          // Added 'key' prop here for React optimization
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default YourFriends;
