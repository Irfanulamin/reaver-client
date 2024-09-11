import React from "react";
import Container from "../ui/Container";
import { IoCallOutline, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-black p-1 md:p-20 l:p-40">
      <Container>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-evenly items-start md:items-center  lg:items-center gap-6 p-12 border-0 lg:border border-slate-500 rounded-full my-14">
          <div className="flex justify-center item-center gap-2">
            <div>
              <IoCallOutline className="bg-yellow-500 text-black w-12 h-12 p-2 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className=" text-white">Contact us</p>
              <p className=" text-white">+1 00XX XX00 0X0X</p>
            </div>
          </div>
          <div className="flex justify-center item-center gap-2">
            <div>
              <BiSolidMessageDetail className="bg-yellow-500 text-black w-12 h-12 p-2 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className=" text-white">Message to us</p>
              <p className=" text-white">reaver_car@store.com</p>
            </div>
          </div>
          <div className="flex justify-center item-center gap-2">
            <div>
              <MdLocationOn className="bg-yellow-500 text-black w-12 h-12 p-2 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className=" text-white">Address</p>
              <p className=" text-white">London, United Kingdom</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center  lg:items-center ">
          <div className="flex flex-col justify-center items-start my-5">
            <h2 className="text-3xl text-white font-bold">Reaver</h2>
            <p className="text-base text-white py-6 ">
              Where reliability meets the road, and every drive begins with
              confidence. <br /> Your journey starts here with cars built to
              last.
            </p>
            <div className="py-4 flex justify-center items-center gap-x-2">
              <Button variant="yellow">
                <IoLogoYoutube className="mx-1 inline-block w-6 h-6" />
              </Button>
              <Button variant="yellow">
                <FaFacebook className="mx-1 inline-block w-6 h-6" />
              </Button>
              <Button variant="yellow">
                <IoLogoWhatsapp className="mx-1 inline-block w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start my-5">
            <h2 className="text-3xl text-white font-bold">Subscribe Now</h2>
            <p className="text-xs text-white py-3 ">
              Want to be notified about our services. <br /> Just sign up and
              we'll send you a notification by email.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2 relative ">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-full text-white py-6"
              />
              <Button
                variant="yellow"
                type="submit"
                className="absolute right-2"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <hr className=" border my-4 border-slate-500" />
        <div>
          <p className="text-white">All right reserved, 2025 Copyright Claim</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
