import Link from 'next/link'
import { useRouter } from 'next/router';
import { IoLogoInstagram, IoLogoYoutube, IoLogoFacebook } from 'react-icons/io';
import React, { useState } from "react"

const Header = () => {
	const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <header className='w-full relative' >
      <nav className='md:w-[90vw] w-[95vw] mx-auto flex flex-row items-center justify-between px-6 py-4 '>
        {/* hamburger button*/}
        <div className="mobile basis-1/4 block lg:hidden">
          {showSidebar ? (
            <div onClick={() => setShowSidebar(!showSidebar)} className="fixed hamburger active z-50"><span></span></div>
					) : (
				  	<div onClick={() => setShowSidebar(!showSidebar)} className="fixed hamburger z-50"><span></span></div>
					)}
        </div>

        {/* logo */}
        <Link href="/"><a className="logo text-center px-4 text-xl md:text-2xl font-semibold text-text-dark">Doviange</a></Link>

        {/* Links */}
        <div className="links w-full  basis-1/4 lg:basis-3/4 flex flex-row items-center justify-between">
          {/* nav links */}
          <div className='hidden lg:flex flex-row items-center mx-auto justify-center text-text-dark text-md font-semibold'>
            <Link href="/"><a className={router.pathname === "/" ? "text-accent" : "tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"}>Home</a></Link>
						
						<Link href="/about"><a className={router.pathname === "/about" ? "mx-8 text-accent" : "mx-8 tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"}>Who we are</a></Link>

						<Link href="/portfolio"><a className={router.pathname === "/portfolio" ? "text-accent" : "tracking-wide  hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"}>Portfolio</a></Link>
					
					</div>

          {/* Cta button */}
          <div className=" flex flex-row">
            {/* contact us btn */}
            <Link href="/contact"><button className='hidden text-text-light tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary bg-primary rounded-sm hover:border-accent  hover:bg-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300'>Contact us</button></Link>
          </div>

        </div>  
      </nav>

      			{/* sidebar menu content */}

			<div className={`top-0 w-full bg-accent bg-opacity-10 fixed h-full z-40 ease-in-out duration-300 ${
					showSidebar ? "-translate-y-0" : "-translate-y-full"
				}`}>
				<div
				className={`top-0 right-0 md:h-3/6 h-5/6 w-full bg-white drop-shadow-2xl fixed h-full z-40 ease-in-out duration-300`}>
				{/* menu link */}
				<div className="mt-[2rem] text-2xl text-text-dark flex flex-col capitalize items-start text-center px-8 py-12">
				<Link href="/"><a className={router.pathname === "/" ? "text-accent my-2" : "tracking-wide leading-loose my-2"}>Home</a></Link>
				<Link href="/about"><a className={router.pathname === "/about" ? "text-accent my-2" : "tracking-wide  leading-loose my-2"}>Who we are</a></Link>
				<Link href="/portfolio"><a className={router.pathname === "/portfolio" ? "text-accent my-2" : "tracking-wide  leading-loose my-2"}>Portfolio</a></Link>
        <Link href="/contact"><a className={router.pathname === "/contact" ? "text-accent my-2" : "tracking-wide  leading-loose my-2"}>Contact us</a></Link>
				</div>

		

				{/* sidebar footer section */}
          <div className="fixed bottom-0 flex flex-col justify-center py-4 left-0 bg-gray-100 text-black text-center w-full">
            {/* social icons only visible on mobile */}
            <p className='text-xs mt-4 items-center text-text-dark justify-center'>Follow us on:</p>
            <div className="lg:hidden text-light flex flex-row items-center justify-center ">
              <Link href="/"><IoLogoInstagram className='w-6 h-6 text-primary' /></Link>
              <Link href="/"><IoLogoYoutube className='w-6 h-6 mx-2 text-primary' /></Link>
              <Link href="/"><IoLogoFacebook className='w-6 h-6 text-primary' /></Link>              
            </div>
           
					<span className="text-xs mt-4 items-center text-text-dark justify-center">
						Copyright &copy; {new Date().getFullYear()}. Jawnchuks studios{" "}
					</span>
				</div>
			</div>
			</div>
    </header>

    
  )
}

export default Header