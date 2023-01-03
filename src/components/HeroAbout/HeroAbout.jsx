import Link from "next/link";
import React from "react";
import hare from "@assets/images/hare.webp";

const HeroAbout = () => {
  return (
    <section className="w-full">
      <div className="w-[95vw] mx-auto flex flex-col items-center">
        <div className="w-full grid lg:grid-cols-6 grid-cols-1 gap-[3rem] items-start justify-items-stretch mt-[30%]  md:mt-[20%] lg:mt-[10%]">
          <h1 className="w-full lg:col-span-4 text-[3rem] lg:text-[6.5rem] tracking-tight leading-none text-secondary font-cinzel">
            About <i>Doviange.</i>
          </h1>
          <div className="w-full md:col-span-2  flex flex-col items-end font-katibeh text-[1.5rem] italic">
            <Link href="#who-we-are">
              <span className="cursor-pointer w-full py-2 my-2 flex flex-row items-end justify-between text-text-dark border-b border-accent">
                <a className="">Who we are</a>
                <div
                  style={{
                    backgroundImage: `url(${hare.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  }}
                  className="w-[8%] md:w-[5%] lg:w-[8%] aspect-square opacity-70 hover:transform hover:rotate-45 transition-transform delay-150"
                ></div>
              </span>
            </Link>
            <Link href="#what-we-do">
              <span className="cursor-pointer w-full py-2 my-2 flex flex-row items-end justify-between text-text-dark border-b border-accent">
                <a className="">What we do</a>
                <div
                  style={{
                    backgroundImage: `url(${hare.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  }}
                  className="w-[8%] md:w-[5%] lg:w-[8%] aspect-square opacity-70 hover:transform hover:rotate-45 transition-transform delay-150"
                ></div>
              </span>
            </Link>
            <Link href="#meet-the-team">
              <span className="cursor-pointer w-full py-2 my-2 flex flex-row items-end justify-between text-text-dark border-b border-accent">
                <a className="">Meet the team</a>
                <div
                  style={{
                    backgroundImage: `url(${hare.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  }}
                  className="w-[8%] md:w-[5%] lg:w-[8%] aspect-square opacity-70 hover:transform hover:rotate-45 transition-transform delay-150"
                ></div>
              </span>
            </Link>
          </div>
        </div>
        <div className="about-img mt-8"></div>
      </div>
    </section>
  );
};

export default HeroAbout;
