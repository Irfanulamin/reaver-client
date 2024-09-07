import AboutSection from "@/components/ui/AboutSection";
import Banner from "@/components/ui/banner";
import BuyNowSection from "@/components/ui/BuyNowSection";
import OurService from "@/components/ui/OurService";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <AboutSection />
      <div className="flex justify-center items-center">
        <div className="w-[5px] h-[100px] bg-amber-500"></div>
      </div>

      <OurService />
      <div className="flex justify-center items-center">
        <div className="w-[5px] h-[100px] bg-amber-500"></div>
      </div>
      <BuyNowSection />
      <div className="flex justify-center items-center">
        <div className="w-[5px] h-[100px] bg-amber-500"></div>
      </div>
    </div>
  );
};

export default HomePage;
