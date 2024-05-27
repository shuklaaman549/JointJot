
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-black">
  <div className="pt-24 mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo.svg' alt='logo'
    width={200}
    height={200}
    />

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
            <li>
                <Link href="/about">
                  <span className="text-white transition hover:text-gray-100/75"> About </span>
                </Link>
            </li>

            <li>
                <Link href="/projects">
                  <span className="text-white transition hover:text-gray-100/75"> Projects </span>
                </Link>
            </li>

            <li>
                <Link href="/services">
                  <span className="text-white transition hover:text-gray-100/75"> Services </span>
                </Link>
            </li>

            <li>
                <Link href="/history">
                  <span className="text-white transition hover:text-gray-100/75"> History </span>
                </Link>
            </li>
            <li>
                <Link href="/owner">
                  <span className="text-white transition hover:text-gray-100/75"> Owner </span>
                </Link>
            </li>

        
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          {/* <div
            className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
           
          >
            <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink>
          </div> */}

          <div
            className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
           
          >
          <RegisterLink>Try JointJot!</RegisterLink>  
          </div>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header


{/* <div className="mt-8">
                <div className="inline-block rounded bg-white text-black px-6 py-2 text-sm font-medium shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500">
                  <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
                </div>
              </div> */}