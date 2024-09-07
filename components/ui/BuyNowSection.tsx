import React from "react";
import Container from "./Container";

const BuyNowSection = () => {
  return (
    <Container>
      <div className="flex justify-center items-center h-full my-24">
        <div className="banner">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold tracking-wide text-amber-600">
              Buy now
            </h3>
            <h3 className="text-3xl font-bold ">What are you waiting for?</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuyNowSection;
