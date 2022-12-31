import Image from "next/image";
import Link from "next/link";
import React from "react";
import certified from "@assets/images/certified.png";
import staircase from "@assets/images/staircase.webp";
// import {HiOutlineExternalLink} from 'react-icons/hi'

const AboutSection = () => {
  return (
    <section className="w-screen h-[120vh] bg-white flex items-center py-24">
      <div className="w-[80vw] mx-auto my-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-20 lg:mb-24 justify-items-stretch items-center">
          <div
            style={{
              backgroundImage: `url(${certified.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="w-[10rem] aspect-square mt-8 mx-auto rounded-b-full"
          ></div>
          <div className="col-span-2 flex flex-col items-center lg:items-start justify-center">
            <h3 className="text-[1.5rem] lg:text-[2rem] font-semibold text-secondary leading-snug tracking-tight font-katibeh">
              We strive to give all the projects we work on a unique yet modern
              look.
            </h3>
            <p className="my-4 text-sm md:text-[1.1rem] text-text-dark leading-snug tracking-tight font-sans">
              The sole aim of our designs is to better the lives of our clients
              with regards to their general health, well being and productivity.
              As we all know that the quality of our interior environment
              influences the way we live and has a huge impact on our habits,
              behaviours and health.
            </p>
          </div>
          <div className="col-span-2 flex items-start justify-between relative">
            <div
              style={{
                backgroundImage: `url(${staircase.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
              }}
              className="w-[20rem] aspect-square mt-8 mx-auto rounded-b-full"
            ></div>
            <div className="absolute top-0 right-0">
              <svg
                viewBox="0 0 100 100"
                width="100"
                height="100"
                fill="#433923"
              >
                <defs>
                  <path
                    id="circle"
                    d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="13">
                  <textPath xlinkHref="#circle">
                    INTERIOR DECOR HOME DESIGN
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
