import Image from 'next/image'
import React from 'react'
import office from '@assets/images/office.jpg'
import outdoor from '@assets/images/outdoor.jpg'
import kitchen from '@assets/images/kitchen.jpg'
import {HiOutlineExternalLink} from 'react-icons/hi'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <section className='w-[80vw] mx-auto my-24 flex flex-col items-center'>
      <h4 className='text-xl lg:text-3xl font-semibold text-secondary text-center'>Our Project</h4>
      <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, necessitatibus.</p>
      <div className='mb-24'></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-10 my-12">
        <div className="flex flex-col items-center justify-between">
          <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary text-center'>Office Designs</h5>
              <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="mb-8">
            <Image src={office} width={300} height={300} alt="office" className='rounded-t-full' />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-col-reverse items-center justify-between">
           <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary text-center'>Kitchen Designs</h5>
              <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="mb-8">
            <Image src={kitchen} width={300} height={300} alt="office" className='rounded-full' />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary text-center'>Outdoor Designs</h5>
              <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="mb-8">
            <Image src={outdoor} width={300} height={300} alt="office" className='rounded-b-full' />
          </div>
        </div>
      </div>

       <Link href="/" >
            <button className='flex flex-row items-center text-sm lg:text-lg text-primary lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>See more of our works &nbsp; <HiOutlineExternalLink/> </button>
      </Link>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-10 my-12">
      
        <div className=" flex flex-col lg:flex-col-reverse items-center justify-between">
           <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary text-center'>Kitchen Designs</h5>
              <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="mb-8">
            <Image src={kitchen} width={300} height={300} alt="office" className='rounded-full' />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary text-center'>Outdoor Designs</h5>
              <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="mb-8">
            <Image src={outdoor} width={300} height={300} alt="office" className='rounded-b-full' />
          </div>
        </div>
      <div className=" flex flex-col lg:flex-col-reverse items-center justify-between">
           <div>
             <h5 className='text-lg lg:text-2xl font-semibold text-secondary text-center'>Office Designs</h5>
              <p className='my-4 text-sm text-text-dark text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore nesciunt quam aliquid dicta pariatur at dignissimos, nemo eum excepturi.</p>
         </div>
          <div className="mb-8">
            <Image src={office} width={300} height={300} alt="office" className='rounded-t-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection