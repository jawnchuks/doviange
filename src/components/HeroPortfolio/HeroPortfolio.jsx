import React from "react";
import heroPortfolio from "@assets/images/portfolioHero.webp";

const HeroPortfolio = () => {
  return (
    <section className="w-full">
      <div className="w-[95vw] mx-auto flex flex-col items-center">
        <div className="w-full grid lg:grid-cols-6 grid-cols-1 gap-[3rem] items-start justify-items-stretch mt-[30%]  md:mt-[20%] lg:mt-[10%]">
          <h1 className="w-full lg:col-span-4 text-[3rem] lg:text-[6.5rem] tracking-tight leading-none text-secondary font-cinzel">
            Our <br /> <i>Portfolio</i>
          </h1>
          <div className="w-full md:col-span-2 text-secondary flex flex-col items-end font-sans text-[1.1rem]">
            Our basic principles of quality, professionalism, and efficiency are
            evident in all we do. For our clients, this translates into a
            comprehensive knowledge and delivery of your particular demands,
            exceeding all expectations.
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${heroPortfolio.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            objectFit: "contain",
          }}
          className="max-h-[60vh] w-screen lg:basis-1/2 aspect-square mt-8"
        ></div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
