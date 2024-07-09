import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="./footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading ">
          Ready to take{" "}
          <span className="text-purple">Your Digital Presence </span> to Another
          Level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-lg">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          //   href="mailto:njrkelvin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="font-light">Copyright ©2024 Kelvin Njeru</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
