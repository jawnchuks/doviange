import Image from 'next/image'
import React from 'react'
import office from '@assets/images/office.jpg'
import outdoor from '@assets/images/outdoor.jpg'
import kitchen from '@assets/images/kitchen.jpg'
import parlour from '@assets/images/parlour.jpg'
import loft from '@assets/images/loft.jpg'
import lightings from '@assets/images/lightings.jpg'
import {HiOutlineExternalLink} from 'react-icons/hi'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <section className='w-[80vw] mx-auto my-24 flex flex-col items-center'>
      <h4 className='text-xl lg:text-3xl font-semibold text-secondary'>Some of our works</h4>
      <p className='my-4 text-md text-text-dark '>At Doviange, we pride ourself on a personal approach to designing your space</p>
      <div className='mb-16'></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-10 mt-4">
        <div className="flex flex-col items-center lg:items-start justify-between mb-24">
          <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary '>Office Design</h5>
              <p className='my-4 text-sm text-text-dark '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="my-2">
            <Image src={office} width={300} height={300} alt="office" className='rounded-t-full' />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-col-reverse items-center lg:items-start justify-between mb-24">
           <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary '>Kitchen Design</h5>
              <p className='my-4 text-sm text-text-dark '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="my-2">
            <Image src={kitchen} width={300} height={300} alt="kitchen" className='rounded-full' />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between mb-24">
          <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary '>Outdoor Design</h5>
              <p className='my-4 text-sm text-text-dark '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="my-2">
            <Image src={outdoor} width={300} height={300} alt="outdoor" className='rounded-b-full' />
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-10">
      
        <div className=" flex flex-col lg:flex-col-reverse items-center lg:items-start justify-between mb-24">
           <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary '>Living Room Design</h5>
              <p className='my-4 text-sm text-text-dark '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="my-2">
            <Image src={parlour} width={300} height={300} alt="living room" className='rounded-full' />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between mb-24">
          <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary '>Loft Design</h5>
              <p className='my-4 text-sm text-text-dark '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="my-2">
            <Image src={loft} width={300} height={300} alt="loft" className='rounded-b-full' />
          </div>
        </div>
      <div className=" flex flex-col lg:flex-col-reverse items-center lg:items-start justify-between mb-24">
           <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary '>Lightings Design</h5>
              <p className='my-4 text-sm text-text-dark '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="my-2">
            <Image src={lightings} width={300} height={300} alt="lightings" className='rounded-t-full' />
          </div>
        </div>

      </div>
      
      <Link href="portfolio" >
            <button className='flex flex-row items-center text-md lg:text-xl text-primary lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>See more of our works &nbsp; <HiOutlineExternalLink/> </button>
      </Link>
    </section>
  )
}

export default ProjectSection