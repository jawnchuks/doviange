import Image from 'next/image'
import React from 'react'
import doviTeam from "@assets/images/doviTeam.jpg"
import man from "@assets/images/testimonial-man.jpg"
import woman from "@assets/images/testimonial-woman.jpg"
import { VscDebugBreakpointLog } from "react-icons/vsc"
import {AiFillFacebook, AiFillTwitterSquare,AiFillInstagram} from "react-icons/ai"
import Link from 'next/link'

const ServicesAbout = () => {
  return (
    <section className='w-full flex flex-col items-start justify-between'>
      {/* who we are */}
      <section id="who-we-are" className='w-full bg-white py-12'>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:basis-1/2 px-8 py-12">
            <Image src={doviTeam} alt="team members" width="700" height="500"  />
          </div>
          <div className="w-full lg:basis-1/2 flex flex-col items-start text-text-dark px-8">
            <h3 className='text-lg lg:text-2md font-semibold text-secondary'>Doviange interiors</h3>
            <p className='text-sm lg:text-md my-2'>Doviange is an Interior and exterior design firm that prides itself on a personal approach to designing your space. Our core values of quality, professionalism and efficiency are reflective in everything we do. For our clients, this translates into a thorough understanding and delivery of your exact needs and even surpassing all expectations.
              We transform interior spaces to highly functional, safe and beautiful spaces. We strive to give all the projects we work on a unique yet modern look. All projects we take on is personalized to suit our client&apos;s desire and lifestyle.</p>
            <p className='text-sm lg:text-md my-2'>The sole aim of our designs is to better the lives of our clients with regards to their general health, well being and productivity. As we all know that the quality of our interior environment influences the way we live and has a huge impact on our habits, behaviours and health.</p>
            <p className='text-sm lg:text-md my-2'>In today&apos;s housing climate, the choice of getting something new and sticking to the old is always an everyday thought but there is only but a thin line between both decisions as we are there to remodel, refurbish, renew, rebuild and restore your home, leisure and work spaces !!!</p>
            <p className='text-sm lg:text-md my-2'>At Doviange global services, we aim to meet all your interior and exterior design/decor needs and to be your long term building management and maintenance partner</p>
            <p className='text-sm lg:text-md my-2'>Our motto: we deliver beauty and creativity</p>
          </div>
        </div>
      </section>
      {/* what we do */}
      <section id="what-we-do" className='w-full bg-white py-12'>
        <div className="w-[80vw] mx-auto flex flex-col lg:flex-row items-center justify-between">
          <p className='w-full lg:basis-1/2 text-lg lg:text-2xl text-secondary my-4'>what we do</p>
          <div className="w-full lg:basis-1/2 flex flex-wrap">
            <span className='w-full lg:w-1/2 text-sm lg:text-md font-semibold text-primary flex flex-row items-center justify-start my-2'>
              <VscDebugBreakpointLog className="mr-8"/>
              <p className='text-secondary'>Interior design</p>
            </span>
             <span className='w-full lg:w-1/2 text-sm lg:text-md font-semibold text-primary flex flex-row items-center justify-start my-2'>
              <VscDebugBreakpointLog className="mr-8"/>
              <p className='text-secondary'>Home & office improvement</p>
            </span>
             <span className='w-full lg:w-1/2 text-sm lg:text-md font-semibold text-primary flex flex-row items-center justify-start my-2'>
              <VscDebugBreakpointLog className="mr-8"/>
              <p className='text-secondary'>Refurbishing & Remodelling</p>
            </span>
             <span className='w-full lg:w-1/2 text-sm lg:text-md font-semibold text-primary flex flex-row items-center justify-start my-2'>
              <VscDebugBreakpointLog className="mr-8"/>
              <p className='text-secondary'>Furniture & Fittings</p>
            </span>
             <span className='w-full lg:w-1/2 text-sm lg:text-md font-semibold text-primary flex flex-row items-center justify-start my-2'>
              <VscDebugBreakpointLog className="mr-8"/>
              <p className='text-secondary'>General Furnishing</p>
            </span>
             <span className='w-full lg:w-1/2 text-sm lg:text-md font-semibold text-primary flex flex-row items-center justify-start my-2'>
              <VscDebugBreakpointLog className="mr-8"/>
              <p className='text-secondary'>Consultation</p>
            </span>
                 
          </div>
        </div>
      </section>
      {/* meet the team */}
      <section id="meet-the-team" className='w-full bg-white py-12'>
        <div className="w-[80vw] mx-auto py-12">
             <h1 className='text-secondary text-2xl lg:text-4xl my-8'>Meet the team</h1>
        <div className="w-full flex lg:flex-row flex-col items-center">
          <div className="lg:basis-1/2 w-full flex flex-col lg:flex-row items-start justify-start px-4 py-2">
            <Image className='rounded-t-full' src={man} alt="Mark Dovi" width={600} height={800}/>
            <div className="flex flex-col items-start justify-center lg:px-8 px-2">
              <h3 className='text-secondary font-extrabold text-2xl lg:text-3xl'>Mark Dovi</h3>
              <p className='text-primary text-sm lg:text-lg my-2'>Managing Partner</p>
              <p className='text-text-dark text-sm lg:text-md my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ex?</p>
              <span className='flex flex-row items-start text-primary text-xl lg:text-3xl my-2'>
                <Link href="/">
                  <a className='hover:text-accent'><AiFillFacebook /></a>
                </Link>
                 <Link href="/">
                  <a className='hover:text-accent mx-4'><AiFillInstagram /></a>
                </Link>
                 <Link href="/">
                  <a className='hover:text-accent'><AiFillTwitterSquare /></a>
                </Link>
              </span>
            </div>
          </div>

           <div className="lg:basis-1/2 w-full flex flex-col lg:flex-row items-start justify-start px-4 my-8 py-2">
            <Image className='rounded-t-full' src={woman} alt="Mark Dovi" width={600} height={800}/>
            <div className="flex flex-col items-start justify-center lg:px-8 px-2">
              <h3 className='text-secondary font-extrabold text-2xl lg:text-3xl'>Dayo Bajomo</h3>
              <p className='text-primary text-sm lg:text-lg my-2'>Managing Partner</p>
              <p className='text-text-dark text-sm lg:text-md my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ex?</p>
              <span className='flex flex-row items-start text-primary text-xl lg:text-3xl my-2'>
                <Link href="/">
                  <a className='hover:text-accent'><AiFillFacebook /></a>
                </Link>
                 <Link href="/">
                  <a className='hover:text-accent mx-4'><AiFillInstagram /></a>
                </Link>
                 <Link href="/">
                  <a className='hover:text-accent'><AiFillTwitterSquare /></a>
                </Link>
              </span>
            </div>
          </div>
        </div>
        </div>
     
      </section>
      
    </section>
  )
}

export default ServicesAbout