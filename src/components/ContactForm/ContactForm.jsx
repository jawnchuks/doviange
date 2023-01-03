import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-secondary py-[10%]">
      <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center justify-center">
        <div className="w-full lg:col-span-3">
          <h3 className="text-center text-[5rem] lg:text-[9rem]  tracking-tight leading-none text-primary font-cinzel">
            Get in touch
          </h3>
        </div>
        <div className="w-fit mx-auto lg:col-span-2 items-center">
          <div className="my-6">
            <h4 className="my-1 text-[2rem] text-primary font-katibeh">
              Location
            </h4>
            <p className="my-1 text-white/70 leading-snug tracking-tight font-sans">
              House 12b 3rd Avenue, Gwarimpa, Abuja. FCT
            </p>
          </div>
          <div className="my-6">
            <h4 className="my-1 text-[2rem] text-primary font-katibeh">
              Contact Information
            </h4>
            <p className="my-1 text-white/70 leading-snug tracking-tight font-sans">
              +234 7063 4674 22
            </p>
            <p className="my-1 text-white/70 leading-snug tracking-tight font-sans">
              hello@doviange.com
            </p>
          </div>
          <div className="flex flex-col items-start justify-center w-full my-8 ">
            <h4 className="my-1 text-[2rem] text-primary font-katibeh">
              Follow our socials
            </h4>
            <div className="flex flex-col text-white/70 my-1 leading-snug tracking-tight font-sans">
              <Link href="">
                <a className="my-1">Facebook</a>
              </Link>
              <Link href="">
                <a className="my-1">Twitter</a>
              </Link>
              <Link href="">
                <a className="my-1">Instagram</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
