import React from "react";
import Container from "../ui/Container";
import { IoCallOutline } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black p-40">
      <Container>
        <div className="flex justify-evenly item-center gap-6 p-12 border border-slate-500 rounded-full">
          <div className="flex justify-center item-center gap-2">
            <div>
              <IoCallOutline className="bg-amber-600 text-black w-12 h-12 p-2 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className=" text-white">Contact us</p>
              <p className=" text-white">+1 00XX XX00 0X0X</p>
            </div>
          </div>
          <div className="flex justify-center item-center gap-2">
            <div>
              <BiSolidMessageDetail className="bg-amber-600 text-black w-12 h-12 p-2 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className=" text-white">Message to us</p>
              <p className=" text-white">reaver_car@store.com</p>
            </div>
          </div>
          <div className="flex justify-center item-center gap-2">
            <div>
              <MdLocationOn className="bg-amber-600 text-black w-12 h-12 p-2 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className=" text-white">Address</p>
              <p className=" text-white">London, United Kingdom</p>
            </div>
          </div>
        </div>
        <div></div>
        <hr className="border border-slate-500" />
        <div>
          <p className="text-white">All right reserved, 2025 Copyright Claim</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
