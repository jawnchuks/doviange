import Link from "next/link";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const HeroContact = () => {
  return (
    <section className="w-full">
      <div className="w-[85vw] mx-auto flex flex-col items-center">
        <div className="w-full flex lg:flex-row flex-col items-start justify-between mt-12 lg:mt-24">
          <h1 className="w-full lg:basis-3/4 text-[3rem] lg:text-[7rem] font-extrabold tracking-tight leading-none text-secondary ">
            Contact <i>Doviange.</i>
          </h1>
          <div className="w-full lg:basis-1/4 flex flex-col items-end">
            <p className="my-2 text-sm lg:text-xl text-justify tracking-tighter text-primary">
              Have a project? we would love to help. Contact us today and get a
              free quotations for your projects!
            </p>
          </div>
        </div>
        <div className="contact-img my-8"></div>
      </div>
    </section>
  );
};

export default HeroContact;
