import React from "react";
import { FaExclamation, FaQuoteLeft } from "react-icons/fa";
import Container from "./Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

const ClientSection = () => {
  const reviews = [
    {
      img: "https://i.ibb.co.com/rpPdQZK/Pizza-Man.jpg",
      name: "John Doe",
      description:
        "Amazing luxury car collection. The attention to detail in each car is top-notch! Will definitely shop here again.",
      rating: 5,
    },
    {
      img: "https://i.ibb.co.com/rpPdQZK/Pizza-Man.jpg",
      name: "Jane Smith",
      description:
        "Great selection of sedan cars! The staff was very helpful and knowledgeable. The store was organized properly",
      rating: 4,
    },
    {
      img: "https://i.ibb.co.com/rpPdQZK/Pizza-Man.jpg",
      name: "Michael Brown",
      description:
        "I loved the convertible selection. The test drive was exhilarating, and the staff made the experience seamless.",
      rating: 5,
    },
    {
      img: "https://i.ibb.co.com/rpPdQZK/Pizza-Man.jpg",
      name: "Micheal Philips",
      description:
        "If you're looking for high-performance sports cars, this is the place! Excellent service and an impressive lineup.",
      rating: 5,
    },
    {
      img: "https://i.ibb.co.com/rpPdQZK/Pizza-Man.jpg",
      name: "Jane Jordan",
      description:
        "The best place to buy electric cars. Their Tesla collection is incredible, and the customer service is exceptional.",
      rating: 4.5,
    },
    {
      img: "https://i.ibb.co.com/rpPdQZK/Pizza-Man.jpg",
      name: "Ibrahim S",
      description:
        "Loved the variety of SUVs available! Found the perfect one for my family with the help of their great team.",
      rating: 4.5,
    },
  ];

  return (
    <Container>
      <div className="my-24">
        <div className="flex justify-center items-center my-6">
          <h2 className="text-4xl font-bold">What Client Says</h2>
        </div>
        <div className="flex justify-center items-center my-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-7xl"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className="p-1 ">
                    <Card className="relative">
                      <CardContent className="p-6 ">
                        <div>
                          <div className="flex justify-start">
                            <FaQuoteLeft className="w-16 h-16 text-amber-600" />
                          </div>
                          <div className="my-2">
                            <p className="text-base">{review.description}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <Image
                              width={400}
                              height={400}
                              src={review.img}
                              alt="review"
                              className=" object-cover h-12 w-12 rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg text-amber-600 font-bold">
                              {review.name}
                            </h3>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default ClientSection;
