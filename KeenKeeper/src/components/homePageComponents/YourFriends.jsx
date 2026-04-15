// import React from "react";
// import FriendsCard from "../Ui/FriendsCard";
// import { useLoaderData } from "react-router";

// const YourFriends = () => {
//   const friends = useLoaderData();

//   return (
//     <section className="w-[85%] mx-auto py-10">
//       <h2 className="geist text-2xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-8 text-left">
//         Your Friends
//       </h2>

//       <div className="mt-3 md:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {friends.map((friend) => (
//           <FriendsCard key={friend.id} friend={friend} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default YourFriends;

// With Loader -

import React, { useState, useEffect } from "react";
import FriendsCard from "../Ui/FriendsCard";
import { useLoaderData } from "react-router";
import { HashLoader } from "react-spinners";

const YourFriends = () => {
  const friends = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-[85%] mx-auto py-10 min-h-[70vh]">
      <h2 className="geist text-2xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-8 text-left">
        Your Friends
      </h2>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <HashLoader color="#21876a" size={60} />
          <p className="mt-6 text-gray-500 font-medium animate-pulse">
            Loading your friend list...
          </p>
        </div>
      ) : (
        <div className="mt-3 md:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </section>
  );
};

export default YourFriends;
