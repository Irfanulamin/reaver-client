import React from "react";
import Container from "./Container";
import { FaExclamation } from "react-icons/fa";

const ProcessSection = () => {
  return (
    <Container>
      <div className="flex justify-center items-center mt-24">
        <h2 className="text-4xl font-bold">
          Car Buying <span className="text-amber-600">Process</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center  my-24 gap-12">
        <div className="flex flex-col justify-center items-start border border-black py-12 px-6 rounded-md">
          <div>
            <h2 className="text-3xl font-bold text-left">Choose A Car</h2>
          </div>
          <div className="my-6">
            <p className="text-sm">
              View our range of cars, find your perfect car for the coming days.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">01</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start border border-black p-2 rounded-md py-12 px-6">
          <div>
            <h2 className="text-3xl font-bold text-left">Come In Contact</h2>
          </div>
          <div className="my-6">
            <p className="text-sm">
              Our advisor team is ready to help you with the booking process or
              any questions.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">02</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start border border-black p-2 rounded-md py-12 px-6">
          <div>
            <h2 className="text-3xl font-bold text-left">Enjoy Driving</h2>
          </div>
          <div className="my-6">
            <p className="text-sm">
              Receive the key and enjoy your car. We treat all our cars with
              respect.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">03</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 mb-24">
        <FaExclamation className=" text-amber-500" />
        <div>
          <p className="text-sm text-amber-600 underline ">
            If you've never bought a car before, we'll guide you through the
            process.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProcessSection;
