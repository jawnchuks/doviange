import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-white py-12 px-8 flex flex-col lg:flex-row items-start justify-start">
      <div className="w-full lg:basis-1/2  rounded-md border border-primary hover:border-accent shadow-lg px-4 py-12">
        <h3 className="font-semibold text-lg lg:text-2xl text-secondary">
          Schedule an appointment
        </h3>

        <form action="" className="mt-8 text-sm lg:text-xl bg-white">
          <span className="leading-loose">
            {" "}
            Hello Doviange, my name is &nbsp;
            <span className=" ">
              <input
                className=" focus:outline-none border-b bg-white border-b-primary"
                type="text"
                name=""
                id=""
                placeholder="enter your name"
                required
              />
            </span>{" "}
            &nbsp; and i am looking for &nbsp;{" "}
            <span>
              <label
                htmlFor="underline hover:text-accent_select"
                className="sr-only"
              >
                Underline hover:text-accent select
              </label>
              <select
                id="underline hover:text-accent_select"
                required
                className="text-gray focus:outline-none border-b bg-white py-1 border-b-primary"
              >
                <option selected>Choose</option>
                <option value="interior-designer">Interior Designer</option>
                <option value="home-decor">Home Decor</option>
                <option value="quotation">Design quotation</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </span>
            , &nbsp; you can get in touch with me at{" "}
            <span>
              <input
                className=" focus:outline-none border-b bg-white border-b-primary"
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                required
              />
            </span>{" "}
            &nbsp;{" "}
          </span>
          <button
            type="submit"
            className="mt-4 lg:mt-8 text-text-light tracking-wide leading-loose lg:flex items-center text-xs lg:text-sm font-normal px-6 py-2 border border-primary bg-primary rounded-sm hover:border-accent  hover:bg-accent lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300"
          >
            send an enquiry
          </button>
        </form>
      </div>
      <div className="w-full lg:basis-1/2 my-12 ">
        <div className="flex flex-row lg:px-8">
          <div className="basis-1/2 text-xs lg:text-lg text-text-dark ">
            <h4 className="my-1 font-extrabold text-primary">Location</h4>
            <p className="my-1">House 12b 3rd Avenue, Gwarimpa, Abuja. FCT</p>
          </div>
          <div className="basis-1/2 text-xs lg:text-lg text-text-dark ">
            <h4 className="my-1 font-extrabold text-primary">
              Contact Information
            </h4>
            <p className="my-1">+234 7063 4674 22</p>
            <p className="my-1">hello@doviange.com</p>
          </div>
        </div>
        <div className="flex items-center justify-start w-full my-8 lg:px-8 text-xs lg:text-lg text-text-dark ">
          <Link href="">
            <a className="underline hover:text-accent">Facebook</a>
          </Link>
          <Link href="">
            <a className="mx-4 underline hover:text-accent">Twitter</a>
          </Link>
          <Link href="">
            <a className="underline hover:text-accent">Instagram</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
