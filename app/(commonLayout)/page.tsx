import AboutSection from "@/components/ui/AboutSection";
import Banner from "@/components/ui/banner";
import BuyNowSection from "@/components/ui/BuyNowSection";
import ClientSection from "@/components/ui/ClientSection";
import OurService from "@/components/ui/OurService";
import ProcessSection from "@/components/ui/ProcessSection";
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
        <div className="w-[5px] h-[100px] bg-amber-500 glow-text"></div>
      </div>
      <ProcessSection />
      <div className="flex justify-center items-center">
        <div className="w-[5px] h-[100px] bg-amber-500 glow-text"></div>
      </div>
      <ClientSection />
    </div>
  );
};

export default HomePage;
