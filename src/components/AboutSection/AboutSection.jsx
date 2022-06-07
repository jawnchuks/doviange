import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import certified from '@assets/images/certified.png'
import staircase from '@assets/images/staircase.jpg'
import {HiOutlineExternalLink} from 'react-icons/hi'

const AboutSection = () => {
  return (
    <section className='w-[80vw] mx-auto my-12'>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-20 lg:mb-24">
        <div className="mt-8 mx-auto">
          <Image src={certified} alt="certified" width={150} height={150}  />
        </div>
        <div className="col-span-2 flex flex-col items-center lg:items-start justify-start">
          <h3 className='text-xl lg:text-4xl font-semibold text-secondary leading-loose tracking-tight'>We have nurtured strong personal relationship</h3>
          <p className='my-4 text-sx lg:text-lg text-text-dark leading-loose tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, tempore voluptate numquam facilis culpa molestiae nihil nam ratione recusandae deserunt nesciunt quidem non aut ducimus? Quod consequatur inventore repudiandae non.</p>
          <Link href="/" >
            <a className='flex flex-row items-center text-sm lg:text-lg text-primary lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>Learn more &nbsp; <HiOutlineExternalLink/> </a>
          </Link>
        </div>
        <div className="col-span-2 flex items-start justify-between relative">
        <div className="mt-8 mx-auto">
          <Image src={staircase} width={400} height={300} alt="certified" className=' rounded-b-full' />
        </div>
          <div className="absolute top-0 right-0">
            <svg viewBox="0 0 100 100" width="100" height="100" fill="#433923"  >
              <defs>
                <path id="circle"
                  d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
              </defs>
              <text fontSize="15">
                <textPath xlinkHref="#circle">
                  INTERIOR DECOR HOME DESIGN
                </textPath>
              </text>
            </svg>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default AboutSection