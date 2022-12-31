import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export const ContactSection = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center py-4 bg-secondary">
      <Marquee
        gradient={false}
        style={{ width: "100vw" }}
        className="lg:text-[5vw] w-full text-[8vw] md:text-[6vw] font-cinzel text-accent flex items-center justify-center overflow-hidden"
      >
        &nbsp;&nbsp;&nbsp;&nbsp; Let&apos;s work together
        &nbsp;&nbsp;&nbsp;&nbsp; Let&apos;s work together
        &nbsp;&nbsp;&nbsp;&nbsp; Let&apos;s work together
        &nbsp;&nbsp;&nbsp;&nbsp; Let&apos;s work together
        &nbsp;&nbsp;&nbsp;&nbsp; Let&apos;s work together
      </Marquee>
      <div className="md:w-[85vw] w-full mx-auto">
        <div className=" w-full mx-auto  z-20 relative grid grid-cols-1 lg:grid-cols-2 justify-items-stretch items-end gap-10">
          <div className="mx-2 lg:mx-0">
            <span className="block lg:text-[5vw] text-[10vw] md:text-[6vw] text-white/90 font-katibeh">
              Need a home redesign ?
            </span>

            <span className="block text-white/75 lg:text-[2vw] text-[4vw] md:text-[3vw]">
              Doviange interiors imagines tailor-made solutions combining
              quality, aesthetics, and ergonomics for each project, including a
              high-end kitchen, sleeping area, stylish bathroom, modular
              dressing room, and so on. Our team of designing and carpentry
              experts dedicates all of their expertise to your project.
            </span>
          </div>

          <div className="w-full flex lg:justify-end md:justify-end justify-center">
            <Link href="/contact">
              <a className="px-16 py-4 lg:py-6 rounded-full text-text-light lg:text-lg tracking-wide lg:flex text-md font-normal border border-primary bg-primary  hover:border-accent  hover:bg-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
