import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from 'next/image';
import testimonialMan from "@assets/images/testimonial-man.jpg"
import testimonialWoman from "@assets/images/testimonial-woman.jpg"
/* Install pure-react-carousel using -> npm i pure-react-carousel */

const Testimonials = () => {
  return (
    <section className='w-full bg-white py-12'>
      <div className="lg:w-[75vw] w-[80vw] mx-auto">
        <div>
           <h4 className='my-4 text-xl lg:text-3xl font-semibold text-secondary text-center'>What our customers are saying</h4>
            <div className='mb-12'></div>
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                    <Slider>
                        <Slide index={0} tabIndex="null">
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="lg:basis-1/2 w-full">
                                        <Image width={400} height={400} src={testimonialMan} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />  
                                      </div>
                                <div className="lg:basis-1/2 w-full mt-4 flex flex-col justify-between relative">
                                        <p className="lg:block hidden absolute top-[-60%] left-[-30%] text-[30rem] text-primary">&ldquo;</p>
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-secondary">Some of the best work that was done!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-text-dark">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-secondary">Jay Smith</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-primary">Architect</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    <div className="lg:basis-1/2 w-full">
                                        <Image width={400} height={400} src={testimonialWoman} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />  
                                      </div>
                                <div className="lg:basis-1/2 w-full mt-4 flex flex-col justify-between relative">
                                        <p className="lg:block hidden absolute top-[-60%] left-[-30%] text-[30rem] text-primary">&ldquo;</p>
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-secondary">Some of the best work that was done!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-text-dark">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-secondary">Anna Smith</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-primary">Senior Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                    <div className="flex justify-end items-center text-secondary mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                          <button className="hover:text-accent text-md md:text-2xl lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-150 duration-300">
                          &larr; prev
                        </button>
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                          <button className="mx-2 md:mx-6 lg:mx-12 hover:text-accent text-md md:text-2xl lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-150 duration-300">
                          next &rarr;
                        </button>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials



