import React from "react";
import FriendDetailsSection from "../../../components/homePageComponents/FriendDetailsSection";
import { useLoaderData } from "react-router";

const FriendDetails = () => {
  const friends = useLoaderData();

  return (
    <div>
      <FriendDetailsSection friends={friends} />
    </div>
  );
};

export default FriendDetails;
