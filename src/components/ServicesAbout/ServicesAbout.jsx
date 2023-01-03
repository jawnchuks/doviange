import Image from "next/image";
import React from "react";
import doviTeam from "@assets/images/doviTeam.webp";
import mark from "@assets/images/mark.webp";
import dayo from "@assets/images/dayo.webp";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";

const ServicesAbout = () => {
  return (
    <section className="w-full flex flex-col items-start justify-between">
      {/* who we are */}
      <section id="who-we-are" className="w-full bg-white py-[10%]">
        <div className="flex flex-col lg:flex-row items-center gap-[3rem] justify-between">
          <div
            style={{
              backgroundImage: `url(${doviTeam.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="max-h-[70vh] rounded-r-full w-full lg:basis-1/2 aspect-square"
          ></div>
          <div className="w-full lg:basis-1/2 flex flex-col items-start text-text-dark px-4">
            <h3 className="text-[2.5rem] lg:text-[4.5rem] font-semibold text-secondary leading-snug tracking-tight font-katibeh">
              Doviange interiors
            </h3>
            <p className="my-4 text-sm md:text-[1.1rem] leading-snug tracking-tight font-sans">
              Doviange is an Interior and exterior design firm that prides
              itself on a personal approach to designing your space. Our core
              values of quality, professionalism and efficiency are reflective
              in everything we do. For our clients, this translates into a
              thorough understanding and delivery of your exact needs and even
              surpassing all expectations. We transform interior spaces to
              highly functional, safe and beautiful spaces. We strive to give
              all the projects we work on a unique yet modern look. All projects
              we take on is personalized to suit our client&apos;s desire and
              lifestyle.
            </p>
            <p className="my-4 text-sm md:text-[1.1rem] leading-snug tracking-tight font-sans">
              The sole aim of our designs is to better the lives of our clients
              with regards to their general health, well being and productivity.
              As we all know that the quality of our interior environment
              influences the way we live and has a huge impact on our habits,
              behaviours and health.
            </p>
            <p className="my-4 text-sm md:text-[1.1rem] leading-snug tracking-tight font-sans">
              In today&apos;s housing climate, the choice of getting something
              new and sticking to the old is always an everyday thought but
              there is only but a thin line between both decisions as we are
              there to remodel, refurbish, renew, rebuild and restore your home,
              leisure and work spaces !!!
            </p>
            <p className="my-4 text-sm md:text-[1.1rem] leading-snug tracking-tight font-sans">
              At Doviange global services, we aim to meet all your interior and
              exterior design/decor needs and to be your long term building
              management and maintenance partner
            </p>
            <p className="my-4 text-sm md:text-[1.1rem] leading-snug tracking-tight font-sans">
              Our motto: we deliver beauty and creativity
            </p>
          </div>
        </div>
      </section>
      {/* what we do */}
      <section id="what-we-do" className="w-full bg-white py-[10%]">
        <div className="w-[90vw] mx-auto flex flex-col lg:flex-row items-center justify-between">
          <p className="w-full lg:basis-1/2 text-[2.5rem] lg:text-[3.5rem] tracking-tight leading-none text-secondary font-cinzel my-4">
            what we do
          </p>
          <div className="w-full lg:basis-1/2 flex flex-wrap">
            <span className="w-full lg:w-1/2 text-[1.5rem] lg:text-[1.7rem] leading-snug tracking-tight font-katibeh text-primary flex flex-row items-center justify-start my-2">
              <VscDebugBreakpointLog className="mr-8" />
              <p className="text-secondary">Interior design</p>
            </span>
            <span className="w-full lg:w-1/2 text-[1.5rem] lg:text-[1.7rem] leading-snug tracking-tight font-katibeh text-primary flex flex-row items-center justify-start my-2">
              <VscDebugBreakpointLog className="mr-8" />
              <p className="text-secondary">Home & office improvement</p>
            </span>
            <span className="w-full lg:w-1/2 text-[1.5rem] lg:text-[1.7rem] leading-snug tracking-tight font-katibeh text-primary flex flex-row items-center justify-start my-2">
              <VscDebugBreakpointLog className="mr-8" />
              <p className="text-secondary">Refurbishing & Remodelling</p>
            </span>
            <span className="w-full lg:w-1/2 text-[1.5rem] lg:text-[1.7rem] leading-snug tracking-tight font-katibeh text-primary flex flex-row items-center justify-start my-2">
              <VscDebugBreakpointLog className="mr-8" />
              <p className="text-secondary">Furniture & Fittings</p>
            </span>
            <span className="w-full lg:w-1/2 text-[1.5rem] lg:text-[1.7rem] leading-snug tracking-tight font-katibeh text-primary flex flex-row items-center justify-start my-2">
              <VscDebugBreakpointLog className="mr-8" />
              <p className="text-secondary">General Furnishing</p>
            </span>
            <span className="w-full lg:w-1/2 text-[1.5rem] lg:text-[1.7rem] leading-snug tracking-tight font-katibeh text-primary flex flex-row items-center justify-start my-2">
              <VscDebugBreakpointLog className="mr-8" />
              <p className="text-secondary">Consultation</p>
            </span>
          </div>
        </div>
      </section>
      {/* meet the team */}
      <section id="meet-the-team" className="w-full bg-white py-12">
        <div className="w-[90vw] mx-auto py-12">
          <h1 className="text-[2.5rem] lg:text-[3.5rem] tracking-tight leading-none text-secondary font-cinzel text-center lg:text-left my-4">
            Meet the team
          </h1>
          <div className="w-full flex lg:flex-row flex-col items-center">
            <div className="lg:basis-1/2 md:w-1/2 mx-auto  w-full flex flex-col lg:flex-row items-start justify-start px-4 py-2">
              <div
                style={{
                  backgroundImage: `url(${mark.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                className="max-h-[40vh] rounded-b-full w-full lg:basis-1/2 aspect-square"
              ></div>
              <div className="flex flex-col items-start justify-center lg:px-8 px-2 py-8">
                <h3 className="text-secondary font-cinzel text-[2rem] md:text-[1.5rem] lg:text-[2rem]">
                  Mark Dovi
                </h3>
                <p className="text-secondary/80 font-katibeh text-[1.5rem] my-2">
                  Managing Partner
                </p>
                <span className="flex flex-row items-start text-primary text-xl lg:text-3xl my-2">
                  <Link href="/">
                    <a className="hover:text-accent">
                      <AiFillFacebook />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover:text-accent mx-4">
                      <AiFillInstagram />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover:text-accent">
                      <AiFillTwitterSquare />
                    </a>
                  </Link>
                </span>
              </div>
            </div>

            <div className="lg:basis-1/2 md:w-1/2 mx-auto  w-full flex flex-col lg:flex-row items-start justify-start px-4 my-8 py-2">
              <div
                style={{
                  backgroundImage: `url(${dayo.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                className="max-h-[40vh] rounded-b-full w-full lg:basis-1/2 aspect-square"
              ></div>
              <div className="flex flex-col items-start justify-center lg:px-8 px-2 py-8">
                <h3 className="text-secondary font-cinzel text-[2rem] md:text-[1.5rem] lg:text-[2rem]">
                  Dayo Bajomo
                </h3>
                <p className="text-secondary/80 font-katibeh text-[1.5rem] my-2">
                  Managing Partner
                </p>
                <span className="flex flex-row items-start text-primary text-xl lg:text-3xl my-2">
                  <Link href="/">
                    <a className="hover:text-accent">
                      <AiFillFacebook />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover:text-accent mx-4">
                      <AiFillInstagram />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover:text-accent">
                      <AiFillTwitterSquare />
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesAbout;
