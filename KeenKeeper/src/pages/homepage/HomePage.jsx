import React from "react";
import HeroSection from "../../components/homePageComponents/HeroSection";
import StatsSection from "../../components/homePageComponents/StatsSection";
import YourFriends from "../../components/homePageComponents/YourFriends";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <YourFriends />
    </div>
  );
};

export default HomePage;
