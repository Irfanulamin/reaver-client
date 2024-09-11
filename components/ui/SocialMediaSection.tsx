import React from "react";
import { Button } from "./button";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <div className="flex justify-center items-center h-full my-24">
      <div className="banner2">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold tracking-wide text-amber-600">
            Contact Us Here
          </h3>
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
      </div>
    </div>
  );
};

export default SocialMediaSection;
