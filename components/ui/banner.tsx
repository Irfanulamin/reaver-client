"use client";
import React from "react";
import { Button } from "./button";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import bannerIcon from "@/public/banner icon.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="h-full">
        <div className="bg-slate-800 relative">
          <div className="py-24 lg:py-72">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center w-full px-2 md:px-12 lg:px-24">
              <motion.div
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <div>
                  <h1 className=" tracking-normal lg:tracking-wider  text-2xl lg:text-5xl font-bold text-white text-center md:text-left lg:text-left ">
                    <span className="text-amber-600">Reaver</span> Where Style
                    and Performance Meet <br />{" "}
                    <span className="hidden md:block lg:block ">
                      Your Premier Car Destination for Luxury and Quality
                      Vehicles
                    </span>
                  </h1>
                  <div className="flex flex-col  md:flex-row lg:flex-row justify-center md:justify-start lg:justify-start py-6 gap-x-4 items-center">
                    <div>
                      <p className="py-2 md:py-4 lg:py-4 text-sm md:text-sm lg:text-lg text-amber-600 ">
                        Discover our cars on store
                      </p>
                    </div>
                    <div>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div>
                <motion.div
                  initial={{ y: 200, opacity: 0, rotate: -50 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 50, damping: 10 }}
                >
                  <Image
                    src={bannerIcon}
                    width={500}
                    height={500}
                    alt="icon"
                    className=" hidden md:block lg:block rotate-image drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
              className="flex justify-center gap-x-1 lg:gap-x-8 items-center py-4"
            >
              <div>
                <p className="text-sm md:text-2xl font-extrabold text-white">
                  1200$
                </p>
              </div>
              <div>
                <p className="text-sm md:text-2xl font-extrabold text-yellow-600 glow-text">
                  ---
                </p>
              </div>
              <div>
                <p className="text-sm md:text-2xl font-extrabold text-white ">
                  V8 Engine
                </p>
              </div>
              <div>
                <p className="text-sm md:text-2xl font-extrabold text-yellow-600 glow-text">
                  ---
                </p>
              </div>
              <div>
                <p className="text-sm md:text-2xl font-extrabold text-white">
                  1200KM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Banner;
