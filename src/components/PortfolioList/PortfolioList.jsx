import React from "react";
import imageee from "@assets/images/staircase.webp";

const PortfolioList = () => {
  const portfolioListData = [
    {
      id: 1,
      title: "Layout of a dental office",
      location: "FCT, Abuja",
      image: imageee,
      date: "Dec 2022",
    },
    {
      id: 2,
      title: "Layout of an optical store",
      location: "Lagos, Ikeja",
      image: "",
      date: "Dec 2022",
    },
    {
      id: 3,
      title: "Furnishing a living room and dining room",
      location: "FCT, Abuja",
      image: "",
      date: "Nov 2022",
    },
    {
      id: 4,
      title: "Layout of a child's bathroom",
      location: "Edo, Benin",
      image: "",
      date: "Sept 2022",
    },
    {
      id: 5,
      title: "Layout of the ground floor of a house",
      location: "Rivers, Port-Harcourt",
      image: "",
      date: "Mar 2022",
    },
    {
      id: 6,
      title: "Creating hallway furniture",
      location: "FCT, Abuja",
      image: "",
      date: "Jan 2022",
    },
    {
      id: 7,
      title: "Layout of a 2 Bedroom house",
      location: "Ogun, Abeokuta",
      image: "",
      date: "Oct 2021",
    },
    {
      id: 8,
      title: "Layout of the ground floor of a house",
      location: "Ogun, Abeokuta",
      image: "",
      date: "July 2021",
    },
    {
      id: 9,
      title: "Layout of a spa",
      location: "Kano, Kano",
      image: "",
      date: "June 2021",
    },
    {
      id: 10,
      title: "Layout of a 2 spaced office",
      location: "Benue, Markurdi",
      image: "",
      date: "May 2021",
    },
  ];
  return (
    <section className="w-[90vw] mx-auto">
      <div className="flex flex-col py-[5%]">
        <h1 className="mt-8 w-2/3 mx-auto text-center text-[2rem] lg:text-[4.5rem] tracking-tight leading-none text-primary font-cinzel">
          Unique, custom-made, and trendy interior designs
        </h1>

        <div>
          <ul className="menu">
            {portfolioListData.map((portfolio) => (
              <li
                key={portfolio.id}
                className="border-b py-4 lg:py-8  hover:bg-primary hover:text-white transition-transform delay-150"
              >
                <a className="menu__item" data-img="img/1.jpg relative">
                  <span className="menu__item-text">
                    <span className="menu__item-textinner font-katibeh">
                      {portfolio.title}
                    </span>
                  </span>
                  <span className="menu__item-sub text-[1.4rem] text-secondary font-sans italic">
                    {portfolio.location}
                  </span>
                  <div
                    style={{
                      backgroundImage: `url(${portfolio.image.src})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      objectFit: "contain",
                    }}
                    className="hidden hover-reveal-img max-w-[10rem] lg:basis-1/2 aspect-square mt-8"
                  ></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
