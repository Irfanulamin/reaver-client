"use client";
import React from "react";
import { Button } from "./button";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import bannerIcon from "@/public/banner icon.png";
import bannerIcon2 from "@/public/banner_icon_2.png";
import bannerIcon3 from "@/public/banner_icon_3.png";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent } from "@/components/ui/carousel";

const Banner = () => {
  return (
    <>
      <div className="h-full">
        <div className="bg-slate-950 relative">
          <div className="py-24 lg:py-72">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center w-full px-2 md:px-12 lg:px-24">
              <motion.div
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <div>
                  <h1 className=" text-2xl lg:text-5xl font-bold text-white text-center md:text-left lg:text-left ">
                    <span className="text-amber-600">Reaver</span> Where Style
                    and Performance Meet <br />{" "}
                    <span className="hidden md:block lg:block ">
                      Your Premier Car Destination for Luxury and Quality
                      Vehicles
                    </span>
                  </h1>
                  <div className="flex flex-col  md:flex-row lg:flex-row justify-center md:justify-start lg:justify-start py-6 gap-x-1 md:gap-x-4 lg:gap-x-8 items-center">
                    <div>
                      <p className="py-2 md:py-4 lg:py-4 text-sm md:text-sm lg:text-lg text-amber-600 ">
                        Discover our cars on store
                      </p>
                    </div>
                    <div className="justify-center items-center hidden md:flex lg:flex">
                      <div className="w-[2px] h-[36px] bg-white"></div>
                    </div>
                    <div>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div>
                <Carousel
                  plugins={[Autoplay({ delay: 2000, stopOnFocusIn: false })]}
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xl"
                >
                  <CarouselContent className="-mt-1 h-[380px]">
                    <motion.div
                      initial={{ y: 200, opacity: 0, rotate: -50 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                      }}
                    >
                      <Image
                        src={bannerIcon}
                        width={500}
                        height={500}
                        alt="icon"
                        className=" rotate-image drop-shadow-2xl "
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 200, opacity: 0, rotate: -50 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                      }}
                    >
                      <Image
                        src={bannerIcon2}
                        width={500}
                        height={500}
                        alt="icon"
                        className="  rotate-image drop-shadow-2xl"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 200, opacity: 0, rotate: -50 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                      }}
                    >
                      <Image
                        src={bannerIcon3}
                        width={500}
                        height={500}
                        alt="icon"
                        className=" lg:block rotate-image drop-shadow-2xl"
                      />
                    </motion.div>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Banner;
