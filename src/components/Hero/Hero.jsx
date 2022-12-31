import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import landing from "@assets/images/landing.jpg";
import backdrop from "@assets/images/backdrop.svg";
import textdrop from "@assets/images/textdrop.svg";
import Link from "next/link";
import ExternalLinkIcon from "@component/Icons/ExternalLinkIcon";

const Hero = () => {
  return (
    <section className="w-full h-screen  mt-[25%] lg:mt-[10%] md:mt-[15%]">
      <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-stretch ">
        <div className=" order-2 w-full flex items-start justify-end relative ">
          <div className="absolute bottom-0 left-5  z-5 w-1/3 aspect-square mx-auto">
            <Image src={backdrop} alt="backdrop" className="" />
          </div>
          <div className="w-[80%] md:w-[50%]  xl:w-[70%] aspect-square mx-auto">
            <Image
              src={landing}
              alt="landing-page"
              className="bg-secondary  rounded-t-full "
            />
          </div>
        </div>
        <div className=" lg:order-2 w-full flex flex-col items-start justify-center lg:mt-[5%] relative">
          <div className="hidden lg:flex lg:absolute top-0 lg:-top-[20%] -right-[8%]">
            <Image
              src={textdrop}
              width={100}
              height={100}
              alt="backdrop"
              className=""
            />
          </div>
          <h2 className="lg:text-[3vw] text-[7vw] md:text-[5vw] font-cinzel text-left w-full lg:w-[90%]  text-secondary capitalize tracking-normal leading-tight">
            Elegant and comfortable designs for the future
          </h2>
          <p className="font-sans my-4 lg:my-6 text-sm md:text-[1.1rem] w-full lg:w-[80%] text-text-dark/90 leading-snug tracking-tight">
            We transform interior spaces to highly functional, safe and
            beautiful spaces. All projects we take on are personalized to suit
            our client&apos;s desire and lifestyle.
          </p>
          <Link href="/about">
            <button className="w-fit mx-auto lg:mx-0 uppercase text-[1.5rem]  font-katibeh flex flex-row items-center  text-primary lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
              Find out more &nbsp; <ExternalLinkIcon />{" "}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
