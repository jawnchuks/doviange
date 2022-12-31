import Image from "next/image";
import React from "react";
import office from "@assets/images/office.jpg";
import outdoor from "@assets/images/outdoor.jpg";
import kitchen from "@assets/images/kitchen.jpg";
import parlour from "@assets/images/parlour.jpg";
import loft from "@assets/images/loft.jpg";
import lightings from "@assets/images/lightings.jpg";
import Link from "next/link";
import ExternalLinkIcon from "@component/Icons/ExternalLinkIcon";

const ProjectSection = () => {
  return (
    <section className="w-[80vw] h-full mx-auto py-[10%] flex flex-col items-center">
      <h4 className="lg:text-[5vw] text-[10vw] md:text-[6vw] text-primary leading-snug tracking-tight font-katibeh">
        Some of our works
      </h4>
      <p className="my-4 text-sm md:text-[1.1rem] text-text-dark leading-snug tracking-tight font-sans ">
        At Doviange, we pride ourself on a personal approach to designing your
        space
      </p>
      <div className="mb-16"></div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 items-center">
        <div className="flex flex-col items-center">
          <div>
            <h5 className="text-[1.5rem] lg:text-[2rem] font-cinzel text-secondary ">
              Office Design
            </h5>
          </div>

          <div
            style={{
              backgroundImage: `url(${office.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-full aspect-square my-2 mx-auto rounded-t-full"
          ></div>
        </div>
        <div className=" flex flex-col lg:flex-col-reverse items-center">
          <div>
            <h5 className="text-[1.5rem] lg:text-[2rem] font-cinzel text-secondary ">
              Kitchen Design
            </h5>
          </div>
          <div
            style={{
              backgroundImage: `url(${kitchen.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-1/2 aspect-square my-2 mx-auto rounded-full"
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h5 className="text-[1.5rem] lg:text-[2rem] font-cinzel text-secondary ">
              Outdoor Design
            </h5>
          </div>
          <div
            style={{
              backgroundImage: `url(${outdoor.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-1/2 aspect-square my-2 mx-auto rounded-b-full"
          ></div>
        </div>
        <div className=" flex flex-col lg:flex-col-reverse items-center">
          <div>
            <h5 className="text-[1.5rem] lg:text-[2rem] font-cinzel text-secondary ">
              Living Room Design
            </h5>
          </div>
          <div
            style={{
              backgroundImage: `url(${parlour.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-full aspect-square my-2 mx-auto rounded-full"
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h5 className="text-[1.5rem] lg:text-[2rem] font-cinzel text-secondary ">
              Loft Design
            </h5>
          </div>
          <div
            style={{
              backgroundImage: `url(${loft.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-full aspect-square my-2 mx-auto rounded-b-full"
          ></div>
        </div>
        <div className=" flex flex-col lg:flex-col-reverse items-center">
          <div>
            <h5 className="text-[1.5rem] lg:text-[2rem] font-cinzel text-secondary ">
              Lightings Design
            </h5>
          </div>
          <div
            style={{
              backgroundImage: `url(${lightings.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-1/2 aspect-square my-2 mx-auto rounded-t-full"
          ></div>
        </div>
      </div>

      <Link href="portfolio">
        <button className="w-fit mx-auto lg:mx-0 uppercase text-[1.7rem]  font-katibeh flex flex-row items-center  text-primary lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
          See our full portfolio &nbsp; <ExternalLinkIcon />{" "}
        </button>
      </Link>
    </section>
  );
};

export default ProjectSection;
