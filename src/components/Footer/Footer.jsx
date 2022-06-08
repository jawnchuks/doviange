import Image from 'next/image'
import Link from 'next/link'
import certified from '@assets/images/certified.png'

const Footer = () => {
  return (
      
        <footer className="px-3 py-8 bg-secondary text-2 text-text-light transition-colors duration-200">
            <div className="flex flex-col">
                <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                    <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                      <Link href="about">
                        <a aria-current="page" className="hover:text-accent ">
                            About us
                        </a>
                      </Link>
                      <Link href="projects">
                        <a aria-current="page" className="hover:text-accent ">
                            Our projects
                        </a>
                      </Link>
                       <Link href="terms">
                        <a aria-current="page" className="hover:text-accent ">
                            Terms and policy
                        </a>
                      </Link>
                    </nav>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
                    </div>
                    <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                        <Image src={certified} width={100} height={100} alt="doviange logo"/>
                    </div>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                    </div>
                    <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                        <span className="">
                            © 2021
                        </span>
                        <span className="mt-7 md:mt-1">
                            Created by &nbsp;
                            <Link href="https://www.linkedin.com/in/jawnchuks/">
                            <a className="underline hover:text-accent" >
                                Jawnchuks
                            </a>
                          </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer