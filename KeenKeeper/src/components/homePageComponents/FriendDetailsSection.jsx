import React from "react";
import { useParams } from "react-router";

const FriendDetailsSection = () => {
  const { id } = useParams();

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">Friend Details Section</h2>
      <p className="mt-4">
        You are viewing details for Friend ID: <b>{id}</b>
      </p>
    </div>
  );
};

export default FriendDetailsSection;
