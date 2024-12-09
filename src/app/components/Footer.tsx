import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black/100'>
      <footer className="text-white body-font -my-6">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          </div>
          <div className="flex-grow flex flex-wrap md:flex-row lg:flex-row md:pr-20 -mb-10 md:text-left text-center order-first gap-y-8 lg:w-1/4">
            
            {/* About Us */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-8">
              <h2 className="title-font font-bold leading-8 text-white tracking-widest text-lg mb-3 hover:text-gray-600 cursor-pointer">
                About Us
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li>
                  <a className="text-white hover:text-gray-600 cursor-pointer">corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-600 cursor-pointer">Opening Hours: Mon - Sat (8.00 - 6.00), Sunday - Closed</a>
                </li>
              </nav>
            </div>
            
            {/* Useful Links */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-8">
              <h2 className="title-font font-bold leading-8 text-white tracking-widest text-lg mb-3 hover:text-gray-600 cursor-pointer">
                Useful Links
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li><a className="text-white hover:text-gray-600 cursor-pointer">About</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">News</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Partners</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Team</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Menu</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Contacts</a></li>
              </nav>
            </div>

            {/* Help */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-8">
              <h2 className="title-font font-bold leading-8 text-white tracking-widest text-lg mb-3 hover:text-gray-600 cursor-pointer">
                Help?
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li><a className="text-white hover:text-gray-600 cursor-pointer">FAQ</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Terms & Conditions</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Reporting</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Documentation</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Support Policy</a></li>
                <li><a className="text-white hover:text-gray-600 cursor-pointer">Privacy</a></li>
              </nav>
            </div>

            {/* Recent Post */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-8">
              <h2 className="title-font font-bold leading-8 text-white tracking-widest text-lg mb-3 hover:text-gray-600 cursor-pointer">
                Recent Post
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image src="/pictures/recentpost.png" alt="recentpost" width={59} height={48} />
                  <li>
                    <a className="text-white hover:text-gray-600 cursor-pointer">
                      20 Feb 2024 <br />
                      Keep Your Business
                    </a>
                  </li>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/pictures/recentpost.png" alt="recentpost" width={59} height={48} />
                  <li>
                    <a className="text-white hover:text-gray-600 cursor-pointer">
                      20 Feb 2024 <br />
                      Keep Your Business
                    </a>
                  </li>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/pictures/recentpost.png" alt="recentpost" width={59} height={48} />
                  <li>
                    <a className="text-white hover:text-gray-600 cursor-pointer">
                      20 Feb 2024 <br />
                      Keep Your Business
                    </a>
                  </li>
                </div>
              </nav>
            </div>

          </div>
        </div>
        <div className="bg-[#4F4F4F]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white font-light text-sm text-center sm:text-left">
              Copyright © 2024 by Maria. All Rights Reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* Social Media Links */}
              <a className="text-[#4F4F4F] bg-white hover:text-blue-600 cursor-pointer ">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-[#4F4F4F] bg-white hover:text-blue-600 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-[#4F4F4F] bg-white hover:text-purple-900 cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-[#4F4F4F] bg-white hover:text-blue-600 cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
