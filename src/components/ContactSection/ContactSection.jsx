import Link from 'next/link'
import React from 'react'

export const ContactSection = () => {
  return (
    <section className='w-full py-4'>
      <div className="lg:w-[75vw] w-[80vw] mx-auto">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-2xl lg:text-3xl text-primary">
                <span className="block font-extrabold">
                    Need a home redesign ?
                </span>
                <span className="block my-2 text-secondary font-semibold text-sm lg:text-lg">
                    Why don&#x27;t you give us a call
                </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex">
                <Link href="/contact">
                <a className='px-6 py-1 lg:py-2 text-text-light text-xs lg:text-sm tracking-wide leading-loose lg:flex text-sm font-normal border border-primary bg-primary rounded-sm hover:border-accent  hover:bg-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>Contact us</a>
                </Link>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
