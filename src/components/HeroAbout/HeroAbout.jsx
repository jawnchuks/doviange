import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineDown } from "react-icons/ai"
import aboutHero from "@assets/images/aboutHero.jpg"

const HeroAbout = () => {
  return (
    <section className='w-full'>
      <div className="w-[85vw] mx-auto flex flex-col items-center">
        <div className="w-full flex lg:flex-row flex-col items-start justify-between mt-12 lg:mt-24">
          <h1 className="w-full lg:basis-3/4 text-[3rem] lg:text-[7rem] font-extrabold tracking-tight leading-none text-secondary ">About <i>Doviange.</i></h1>
          <div className="w-full lg:basis-1/4 flex flex-col items-end">
           
            <Link href="#who-we-are">
               <span className='cursor-pointer w-full py-2 my-2 flex flex-row items-center justify-between text-sm text-text-dark border-b border-accent'>
                <a className=''>Who we are</a>
                <AiOutlineDown />
                </span>
              </Link>
              <Link href="#what-we-do">
               <span className='cursor-pointer w-full py-2 my-2 flex flex-row items-center justify-between text-sm text-text-dark border-b border-accent'>
                <a className=''>What we do</a>
                <AiOutlineDown />
                </span>
              </Link>
              <Link href="#meet-the-team">
               <span className='cursor-pointer w-full py-2 my-2 flex flex-row items-center justify-between text-sm text-text-dark border-b border-accent'>
                <a className=''>Meet the team</a>
                <AiOutlineDown />
                </span>
              </Link>
  

          </div>
        </div>
        <div className="about-img my-8"> 
        </div>
    </div>
    </section>
  )
}

export default HeroAbout