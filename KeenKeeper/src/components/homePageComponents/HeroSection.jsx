import React from "react";
import { HiPlus } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="w-11/12 mx-auto pt-12 md:pt-16 lg:pt-20 pb-10">
      <div className="flex flex-col items-center text-center">
        {/* Title: */}
        <h2 className="geist text-[23.5px] md:text-[38px] lg:text-5xl font-bold text-[#1F2937] leading-tight tracking-tight max-w-lg md:max-w-2xl lg:max-w-4xl">
          Friends to keep close in your life
        </h2>

        {/* Subtitle: */}
        <p className="mt-3 md:mt-3.5 lg:mt-4.5 text-slate-500 text-sm md:text-[15px] lg:text-[17.5px] max-w-lg md:max-w-xl lg:max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Button:  */}
        <div className="mt-7 md:mt-9 lg:mt-10">
          <button className="flex items-center gap-2 bg-[#224236] hover:bg-black text-white px-4 py-2.5 md:px-5 md:py-3 lg:px-5.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-[13px] md:text-[16px] lg:text-[17px] cursor-pointer">
            <HiPlus className="text-lg md:text-xl" />
            <span>Add a Friend</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
