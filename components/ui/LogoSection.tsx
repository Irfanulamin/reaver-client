"use client";
import React from "react";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const LogoSection = () => {
  const brands = [
    {
      img: "https://i.ibb.co.com/9WhfQSY/How-Do-You-Build-a-Brand-Like-Maria.jpg",
      name: "Porsche",
      description:
        "Porsche is known for creating iconic sports cars that combine luxury, precision engineering, and an unmistakable racing heritage.",
    },
    {
      img: "https://i.ibb.co.com/SvYCPZC/Manual-de-Taller-CHEVROLET-MONTECARLO-1981-Descargar-PDF-Gratis.jpg",
      name: "Chevrolet",
      description:
        "Chevrolet offers a wide range of vehicles, from affordable sedans to rugged trucks, known for their durability and value for money.",
    },
    {
      img: "https://i.ibb.co.com/pWyG3L2/Audi-Logo-Audi-Logos-Audi-Emblem-Audi-Symbol.jpg",
      name: "Audi",
      description:
        "Audi combines luxury with cutting-edge technology and performance, offering a range of vehicles that appeal to both driving enthusiasts and tech lovers.",
    },
    {
      img: "https://i.ibb.co.com/LtLYQjW/Mclaren-44366-Free-EPS-SVG-Download.jpg",
      name: "McLaren",
      description:
        "McLaren is a British manufacturer known for high-performance, lightweight sports cars with advanced engineering and a rich motorsport legacy.",
    },
    {
      img: "https://i.ibb.co.com/6DXVDzq/How-to-draw-the-Tesla-logo-Sketchok-easy-drawing-guides.jpg",
      name: "Tesla",
      description:
        "Tesla leads the electric vehicle revolution, offering luxury electric cars with impressive range, cutting-edge technology, and autonomous driving features.",
    },
    {
      img: "https://i.ibb.co.com/CzLP9hY/download-2.jpg",
      name: "Land Rover",
      description:
        "Land Rover is renowned for building luxury SUVs with a focus on off-road capability, combining ruggedness with elegance.",
    },
    {
      img: "https://i.ibb.co.com/4W2ZnwC/Ferrari-Logo.jpg",
      name: "Ferrari",
      description:
        "Ferrari is synonymous with speed and luxury, producing some of the world's most desirable and high-performance supercars.",
    },
    {
      img: "https://i.ibb.co.com/bLWtcN5/Top-20-Car-Logos-Of-All-Time.jpg",
      name: "BMW",
      description:
        "BMW offers a range of vehicles known for their driving dynamics, blending luxury with precision handling and powerful performance.",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <Carousel
        plugins={[Autoplay({ delay: 1500, stopOnFocusIn: false })]}
        className="w-full "
      >
        <CarouselContent>
          {brands.map((brand, index) => (
            <CarouselItem
              key={index}
              className=" basis-full md:basis-1/2 lg:basis-1/4 "
            >
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 overflow-hidden relative">
                    <div>
                      <Image
                        src={brand.img}
                        width={200}
                        height={200}
                        alt={brand.name}
                        className="w-full h-36 object-cover "
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LogoSection;
