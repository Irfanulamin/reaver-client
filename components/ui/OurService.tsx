import React from "react";
import Container from "./Container";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const cars = [
  {
    img: "https://i.ibb.co.com/mHh3vbp/Porsche-911-GT3-RS-for-sale-James-Edition.jpg",
    name: "Luxury Cars",
    description:
      "A luxury sports car known for its racing heritage and precision performance.",
  },
  {
    img: "https://i.ibb.co.com/sysxxtN/Chevrolet-Cruze-Sedan-Premier-I-e-II-2020-em-detalhes-Mundo-do-Autom-vel-para-PCD.jpg",
    name: "Sedan Cars",
    description:
      "A compact sedan known for its practicality, comfort, and efficiency.",
  },
  {
    img: "https://i.ibb.co.com/ZK6HkVG/Can-You-Drive-a-Convertible-All-Year-Long-Audi-S5-Cabriolet-Says-Yes-A-Girls-Guide-to-Cars.jpg",
    name: "Convertible Cars",
    description:
      "A luxury convertible offering performance and open-top driving experience.",
  },
  {
    img: "https://i.ibb.co.com/F75Dw19/Mc-Laren-765-LT.jpg",
    name: "Sports Cars",
    description:
      "A high-performance sports car with a lightweight design and powerful engine.",
  },
  {
    img: "https://i.ibb.co.com/cYF5MQV/2020-Tesla-Model-S.jpg",
    name: "Electric Cars",
    description:
      "An all-electric luxury sedan offering impressive range and cutting-edge technology.",
  },
  {
    img: "https://i.ibb.co.com/JtRxZTt/download-1.jpg",
    name: "SUV Cars",
    description:
      "A versatile SUV with ample space and great off-road capabilities.",
  },
];

const OurService = () => {
  return (
    <Container>
      <div className="flex justify-center items-center mt-12">
        <div>
          <h2 className=" tracking-widest text-xl text-black text-center">
            Check Out
          </h2>
          <h1 className="text-amber-600 text-3xl font-bold  text-center">
            Our Collections
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {cars.map((car, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1 ">
                  <Card className="relative">
                    <CardContent className="flex aspect-square items-center justify-center p-2 overflow-hidden relative">
                      <div className="relative w-full h-64 overflow-hidden rounded-md">
                        <Image
                          src={car.img}
                          width={500}
                          height={500}
                          alt={car.name}
                          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                        />
                        <div className="bg-yellow-600 p-2 rounded-full font-bold text-sm absolute left-2 bottom-2 z-10">
                          <div className="flex justify-center items-center">
                            <p className="bg-white text-black rounded-full py-1 px-3.5">
                              {index + 1}
                            </p>
                            <h1 className="px-2">{car.name}</h1>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default OurService;
