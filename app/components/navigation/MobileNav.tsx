'use client'
import React from 'react'
import { NavLinks } from '@/constants/constants'
import { Link } from 'react-scroll'
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div>
      {/* Overlay (only visible when nav is open) */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-[10040]"
          onClick={closeNav}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-purple-400 z-[10050] transform ${navOpen} transition-transform duration-500`}
      >
        <div className="flex flex-col justify-center h-full space-y-6 px-8">
          {NavLinks.map((link) => (
            <Link 
              key={link.id}
              to={link.url}
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              activeClass="active-link"
              onClick={closeNav} 
              className="cursor-pointer transition duration-300">

              <p className="text-white" >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav
