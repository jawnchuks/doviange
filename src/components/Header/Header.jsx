import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import SideNav from "@component/SideNav/SideNav";

const Header = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    setShowSidebar(!showSidebar);
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };
  return (
    <header className="w-full relative ">
      <nav
        id="mix"
        className="w-full fixed backdrop-blur  top-0 inset-x-0 z-50"
      >
        <div className="w-[95vw] mx-auto grid grid-cols-2 items-center justify-items-stretch py-4 lg:relative">
          {/* logo */}
          <div className="">
            <Link href="/">
              <a className="text-center text-xl md:text-3xl font-semibold  text-secondary invert font-cinzel">
                Doviange
              </a>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden lg:flex links w-full  flex-row items-center justify-between font-light font-katibeh text-[1.5vw]">
            {/* nav links */}
            <div className="hidden lg:flex flex-row items-center mx-auto justify-center text-text-dark invert uppercase">
              <Link href="/">
                <a
                  className={
                    router.pathname === "/"
                      ? "mx-4 text-accent"
                      : "mx-4 tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
                  }
                >
                  Home
                </a>
              </Link>

              <Link href="/about">
                <a
                  className={
                    router.pathname === "/about"
                      ? "mx-4 text-accent"
                      : "mx-4 tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
                  }
                >
                  About us
                </a>
              </Link>

              <Link href="/portfolio">
                <a
                  className={
                    router.pathname === "/portfolio"
                      ? "mx-4 text-accent"
                      : "mx-4 tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
                  }
                >
                  Portfolio
                </a>
              </Link>

              <Link href="/blog">
                <a
                  className={
                    router.pathname === "/blog"
                      ? "mx-4 text-accent"
                      : "mx-4 tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
                  }
                >
                  Blog
                </a>
              </Link>
            </div>

            {/* Cta button */}
            <div className=" flex flex-row">
              {/* contact us btn */}
              <Link href="/contact">
                <button className="hidden invert text-text-light tracking-wide leading-loose lg:flex items-center text-sm font-sans px-6 py-1 border border-primary bg-primary rounded-full hover:border-accent  hover:bg-accent lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                  Contact us
                </button>
              </Link>
            </div>
          </div>

          {/* hamburger button*/}
          <div className="invert lg:hidden flex items-start justify-end">
            {showSidebar ? (
              <button
                disabled={disabled}
                onClick={handleMenu}
                className="button -menu-open z-50 cursor-pointer "
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <line x1="0" y1="17" x2="48" y2="17" strokeWidth="1" />
                    <line x1="0" y1="31" x2="48" y2="31" strokeWidth="1" />
                  </g>

                  <g>
                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
                  </g>
                </svg>
              </button>
            ) : (
              <button
                disabled={disabled}
                onClick={handleMenu}
                className="button z-50 cursor-pointer "
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <line x1="0" y1="17" x2="48" y2="17" strokeWidth="1" />
                    <line x1="0" y1="31" x2="48" y2="31" strokeWidth="1" />
                  </g>

                  <g>
                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
                  </g>
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* sidebar menu content */}

      <SideNav showSidebar={showSidebar} />
    </header>
  );
};

export default Header;
