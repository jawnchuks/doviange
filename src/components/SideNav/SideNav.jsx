import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
// import ExternalLinkIcon from "@component/Icons/ExternalLinkIcon";
import gsap from "gsap";
import { useRouter } from "next/router";

import linkImage from "@assets/images/loft.jpg";
import ExternalLinkIcon from "@component/Icons/ExternalLinkIcon";

const SideNav = ({ showSidebar }) => {
  const router = useRouter();

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);
  let info = useRef(null);

  let externalLink1 = useRef(null);
  let externalLink2 = useRef(null);
  let externalLink3 = useRef(null);
  let externalLink4 = useRef(null);

  useEffect(() => {
    if (!showSidebar && showSidebar === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.5,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (showSidebar && showSidebar === true) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        height: "100%",
        opacity: 1,
      });
      staggerReveal(revealMenuBackground, revealMenu);
      slideInUp(info);
      AnimateMenuLinks(link1, link2, link3, link4);
      animateExternalLinks(
        externalLink1,
        externalLink2,
        externalLink3,
        externalLink4
      );
    }
  }, [showSidebar]);

  // Various animation functions

  const slideInUp = (node1) => {
    gsap.from(node1, {
      x: 120,
      width: 0,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  };
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.09,
      },
    });
  };

  const AnimateMenuLinks = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const animateExternalLinks = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.8,
      x: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  };

  return (
    <main
      ref={(el) => (menu = el)}
      className={`w-screen h-screen z-[30] fixed inset-x-0 inset-y-0 overflow-hidden scrollbar-hide`}
    >
      {/* menu secondary bg color */}
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="w-screen h-screen z-[-1] fixed top-0 left-0 bg-[#D26D25]"
      ></div>

      {/* menu-layer */}
      <div
        ref={(el) => (revealMenu = el)}
        className="relative bg-white h-screen w-screen overflow-hidden "
      >
        {/* menu/links bg */}
        <div className="absolute inset-x-0 inset-y-0 w-full h-full opacity-0"></div>

        {/* Menu Links */}
        <div className="container w-[90vw] mx-auto">
          <div className="wrapper relative flex flex-col h-screen ">
            <div className="menu-links flex gap-2 md:flex-row flex-col items-start justify-between relative top-[15%]">
              <nav className="flex">
                <ul className="p-0 m-0 flex flex-col items-start font-cinzel">
                  {/* map links here */}
                  <li ref={(el) => (link1 = el)} className="">
                    <Link href="/">
                      <a
                        className={
                          router.pathname === "/"
                            ? " text-[#D26D25] font-trocchi text-[2rem]"
                            : "text-[#171627]  hover:text-[#D26D25] text-[2rem]"
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li ref={(el) => (link2 = el)} className="">
                    <Link href="/about">
                      <a
                        className={
                          router.pathname === "about"
                            ? " text-[#D26D25] font-trocchi text-[2rem]"
                            : "text-[#171627]  hover:text-[#D26D25] text-[2rem]"
                        }
                      >
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li ref={(el) => (link3 = el)} className="">
                    <Link href="/portfolio">
                      <a
                        className={
                          router.pathname === "portfolio"
                            ? " text-[#D26D25] font-trocchi text-[2rem]"
                            : "text-[#171627]  hover:text-[#D26D25] text-[2rem]"
                        }
                      >
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li ref={(el) => (link4 = el)} className="">
                    <Link href="/blog">
                      <a
                        className={
                          router.pathname === "blog"
                            ? " text-[#D26D25] font-trocchi text-[2rem]"
                            : "text-[#171627]  hover:text-[#D26D25] text-[2rem]"
                        }
                      >
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div
                ref={(el) => (info = el)}
                className="info basis-1/2 w-full p-0"
              >
                <Image
                  src={linkImage}
                  alt="jawn image"
                  layout="responsive"
                  className=" aspect-auto w-[30%] "
                />
              </div>
            </div>

            {/* sidebar footer section */}
            <div className="absolute flex  bottom-0 font-sans my-[2rem]">
              <span ref={(el) => (externalLink1 = el)}>
                <Link href="/">
                  <a className="mx-1 w-fit flex items-center justify-center text-xs md:text-sm font-bold focus:outline-none text-[#D26D25] border border-white hover:border-[#D26D25] px-0 py-1 md:py-3 my-1 rounded-full   transition ease-in-out delay-100 ">
                    LinkedIn <span className="ml-2"></span>{" "}
                  </a>
                </Link>
              </span>
              <span ref={(el) => (externalLink2 = el)}>
                <Link href="/">
                  <a className="mx-1 w-fit flex items-center justify-center text-xs md:text-sm font-bold focus:outline-none text-[#D26D25] border border-white hover:border-[#D26D25] px-0 py-1 md:py-3 my-1 rounded-full   transition ease-in-out delay-100 ">
                    Github <span className="ml-2"></span>{" "}
                  </a>
                </Link>
              </span>
              <span ref={(el) => (externalLink3 = el)}>
                <Link href="/">
                  <a className="mx-1 w-fit flex items-center justify-center text-xs md:text-sm font-bold focus:outline-none text-[#D26D25] border border-white hover:border-[#D26D25] px-0 py-1 md:py-3 my-1 rounded-full   transition ease-in-out delay-100 ">
                    Twitter <span className="ml-2"></span>{" "}
                  </a>
                </Link>
              </span>
              <span ref={(el) => (externalLink4 = el)}>
                <Link href="/">
                  <a className="mx-1 w-fit flex items-center justify-center text-xs md:text-sm font-bold focus:outline-none text-[#D26D25] border border-white hover:border-[#D26D25] px-0 py-1 md:py-3 my-1 rounded-full   transition ease-in-out delay-100 ">
                    Instagram <span className="ml-2"></span>{" "}
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* menu link */}
      </div>
    </main>
  );
};

export default SideNav;
