'use client'
import React from 'react'
import { NavLinks } from '@/constants/constants'
import Link from "next/link";
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
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-gray-900 z-[10050] transform ${navOpen} transition-transform duration-500`}
      >
        <div className="flex flex-col justify-center h-full space-y-6 px-8">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl border-b-[1.5px] pb-1 border-white sm:text-[30px]">
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
