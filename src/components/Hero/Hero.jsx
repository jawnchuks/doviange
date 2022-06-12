import Image from 'next/image'
import React from 'react'
import landing from '@assets/images/landing.jpg'
import backdrop from '@assets/images/backdrop.svg'
import textdrop from '@assets/images/textdrop.svg'
import Link from 'next/link'
import {HiOutlineExternalLink} from 'react-icons/hi'

const Hero = () => {
  return (
    <section className='w-full'>
      <div className="w-[80vw] mx-auto flex flex-col lg:flex-row items-start justify-between py-4 lg:py-12 ">
        <div className="lg:basis-1/2 w-full items-start justify-start relative">
          <div className="absolute bottom-20 lg:bottom-0 lg:-left-10  z-5">
            <Image src={backdrop} alt="backdrop" className='' /> 
          </div> 
        <div className='my-8 lg:my-1 lg:mr-12 px-8 z-10'>
            <Image src={landing} alt="landing-page" className='bg-secondary rounded-t-full ' />
            
        </div>
      </div>
        <div className="lg:basis-1/2 w-full flex flex-col items-center lg:items-start justify-center lg:mt-[5%] my-auto relative">
            <div className="hidden lg:flex lg:absolute top-0 lg:-top-[30%] -right-[20%]">
               <Image src={textdrop} width={100} height={100} alt="backdrop" className='' /> 
            </div> 
            <h2 className='text-2xl lg:text-5xl font-semibold text-left text-secondary capitalize tracking-normal leading-tight'>creating elegance and comfort</h2>
            <p className='my-4 lg:my-6 text-sm lg:text-lg text-text-dark tracking-wide'>We transform interior spaces to highly functional, safe and beautiful spaces. All projects we take on are personalized to suit our client&apos;s desire and lifestyle.my-2</p>
        <Link href="/" >
            <button className='flex flex-row items-center text-md lg:text-lg text-primary lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>Find out more &nbsp; <HiOutlineExternalLink/> </button>
      </Link>
      </div>
      </div>
    </section>
  )
}

export default Hero