import React from "react";
import Container from "./Container";
import Image from "next/image";
import aboutUS from "@/public/aboutus.jpg";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuCheckSquare } from "react-icons/lu";

const AboutSection = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-x-12 my-44">
        <div className="flex flex-col justify-center items-start">
          <div>
            <h2 className=" font-extrabold text-5xl">
              We are More than <br />
              <span className="text-amber-600">A Car Store</span>
            </h2>
          </div>
          <div className="py-2 ">
            <p className=" text-lg ">
              we're not just about selling vehicles; we're about enhancing your
              driving experience. <br /> Our commitment goes beyond providing
              you with a car—it’s about <br /> delivering excellence and
              satisfaction at every turn.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center gap-x-2">
              <div>
                <IoCheckmarkDoneSharp className="text-amber-600 w-6 h-6" />
              </div>
              <div>
                <p className="tracking-wider text-xl">Luxury & Sports Cars</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <div>
                <IoCheckmarkDoneSharp className="text-amber-600 w-6 h-6" />
              </div>
              <div>
                <p className="tracking-wider text-xl">Economy Cars</p>
              </div>
            </div>
          </div>
          <div className="py-4">
            <button className="bg-yellow-500 text-black hover:bg-black hover:text-yellow-500 transition_custom p-4 rounded-full">
              Learn More <LuCheckSquare className="inline-block " />
            </button>
          </div>
        </div>
        <div className=" overflow-hidden">
          <Image
            src={aboutUS}
            height={2000}
            width={2000}
            alt="about-us"
            className="w-full h-96 object-cover transition-transform duration-300 transform hover:scale-110  rounded-md"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
