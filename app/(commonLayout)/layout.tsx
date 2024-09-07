import Footer from "@/components/shared/Footer";
import React from "react";
import Banner from "@/components/ui/banner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
