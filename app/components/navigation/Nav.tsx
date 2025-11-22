"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from "@/constants/constants";
import Link from "next/link";

type Props = { openNav: () => void };

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[19vh] z-50 transition-all duration-500 
        ${scrolled 
          ? "bg-gradient-to-br from-purple-100 via-white to-teal-100" 
          : "bg-transparent"
        } rounded-bl-3xl rounded-br-3xl flex items-center`}
    >
      <div className="p-5 flex items-center space-x-3.5">
        <div className="items-center justify-center">
          <Image
            src="/logo.png"
            alt="Beyond Silence Icon"
            width={70}
            height={70}
          />
        </div>

        <h1 className="text-4xl font-bold text-purple-800">
          Speak . Heal . Rise
        </h1>
      </div>

      <div className="hidden lg:flex items-center space-x-10 ml-60">
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="text-lg font-medium text-purple-800 hover:text-purple-600 transition-all duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <HiBars3BottomRight
        onClick={openNav}
        className="w-8 h-8 text-purple-800 cursor-pointer ml-auto mr-10 lg:hidden"
      />
    </div>
  );
};

export default Nav;
