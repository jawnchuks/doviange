import Image from "next/image";
import Link from "next/link";
import certified from "@assets/images/certified.png";

const Footer = () => {
  return (
    <footer className="px-3 py-16 bg-secondary text-2 border-t border-white/20 text-text-light transition-colors duration-200">
      <div className="flex flex-col">
        <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
          <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-white/20 md:pr-5 lg:text-[1.5vw] text-[5vw] md:text-[3vw] text-white/90 font-katibeh italic">
            <Link href="about">
              <a aria-current="page" className="hover:text-accent">
                About us
              </a>
            </Link>
            <Link href="portfolio">
              <a aria-current="page" className="hover:text-accent my-4">
                Our projects
              </a>
            </Link>
            <Link href="blog">
              <a aria-current="page" className="hover:text-accent">
                Blog
              </a>
            </Link>
          </nav>

          <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-white/20">
            <div
              className="aspect-square w-1/3 rounded-full relative border-2 "
              style={{
                backgroundImage: `url(${certified.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
              }}
            ></div>
          </div>

          <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-start md:items-start md:pl-5 lg:text-[1.5vw] text-[5vw] md:text-[3vw] text-white/90 font-katibeh italic">
            <span className="">Copyright © 2021. Doviange global services</span>
            <span className="mt-7 md:mt-1">
              Created by &nbsp;
              <Link href="https://www.jawnchuks.com">
                <a className="underline hover:text-accent">Jawnchuks</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
