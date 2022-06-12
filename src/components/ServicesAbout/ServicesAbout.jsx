import Image from 'next/image'
import React from 'react'
import doviTeam from "@assets/images/doviTeam.jpg"

const ServicesAbout = () => {
  return (
    <section className='w-full flex flex-col items-start justify-between'>
      {/* who we are */}
      <section id="who-we-are">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:basis-1/2 px-8 py-12">
            <Image src={doviTeam} alt="team members" width="700" height="500"  />
          </div>
          <div className="w-full lg:basis-1/2 flex flex-col items-start text-text-dark px-8">
            <h3 className='text-lg lg:text-2xl font-semibold text-secondary'>Doviange interiors</h3>
            <p className='text-sm lg:text-md my-2'>Doviange is an Interior and exterior design firm that prides itself on a personal approach to designing your Space. Our core values of quality, Professionalism and Efficiency are reflective in everything we do. For our clients, this translates into a thorough understanding and delivery of your exact needs and even surpassing all expectations.
              We transform interior spaces to highly functional, safe and beautiful spaces. We strive to give all the projects we work on a unique yet modern look. All projects we take on is personalized to suit our client&apos;s desire and lifestyle.</p>
            <p className='text-sm lg:text-md my-2'>The sole aim of our designs is to better the lives of our clients with regards to their general health, well being and productivity. As we all know that the quality of our interior environment influences the way we live and has a huge impact on our habits, behaviours and health.</p>
            <p className='text-sm lg:text-md my-2'>In today&apos;s housing climate, The choice of getting something new and sticking to the old is always an everyday thought but there is only but a thin line between both decisions as we are there to Remodel, Refurbish, Renew, Rebuild and Restore your Home, leisure and work spaces !!!</p>
            <p className='text-sm lg:text-md my-2'>At Doviange global services, we aim to meet ALL your interior and exterior design/decor needs and to be your long term building management and maintenance partner</p>
            <p className='text-sm lg:text-md my-2'>Our Motto: we deliver beauty and creativity</p>
          </div>
        </div>
      </section>
      {/* what we do */}
      <section id="what-we-do">
      </section>
      {/* meet the team */}
      <section id="meet-the-team">
      </section>
    </section>
  )
}

export default ServicesAbout