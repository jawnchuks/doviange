import Image from 'next/image'
import React from 'react'
import landing from '@assets/images/landing.jpg'
import backdrop from '@assets/images/backdrop.svg'
import textdrop from '@assets/images/textdrop.svg'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='w-full'>
      <div className="w-[80vw] mx-auto flex flex-col lg:flex-row items-start justify-between lg:py-12 ">
        <div className="lg:basis-1/2 w-full items-start justify-start py-4 relative">
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
            <h2 className='text-2xl lg:text-6xl font-semibold lg:text-left text-center text-secondary capitalize tracking-normal leading-tight'>creating elegance and comfort</h2>
            <p className='my-4 lg:my-6 text-xs lg:text-lg text-text-dark tracking-wide leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt voluptatibus nulla eum soluta voluptate iste? Eveniet distinctio a maxime?</p>
            <Link href="/">
            <a className='px-6 py-1 lg:py-2 text-text-light text-xs lg:text-sm tracking-wide leading-loose lg:flex text-sm font-normal border border-primary bg-primary rounded-sm hover:border-accent  hover:bg-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>Explore now</a>
            </Link>
      </div>
      </div>
    </section>
  )
}

export default Hero