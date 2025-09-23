import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLinks } from "@/constants/constants";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 via-white to-green-50 py-10 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/main_logo.jpeg" 
            alt="Beyond Silence Logo" 
            width={70} 
            height={70} 
            className="rounded-full"
          />
          <h2 className="text-2xl font-bold text-purple-700 mt-4">Beyond Silence</h2>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            Speak . Heal . Rise 💜  
            Creating a safe community for mental wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
  <h3 className="text-lg font-semibold text-[#0fa0a3] mb-3">Quick Links</h3>
  <ul className="space-y-2 text-gray-700">
    {NavLinks.map((link) => (
      <li key={link.id}>
        <Link
          href={link.url}
          className="hover:text-purple-600 transition-colors duration-200"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#0fa0a3] mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2 text-gray-700">
            <FaEnvelope className="text-purple-600" /> beyondsilence@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <FaPhone className="text-green-600" /> 0733 445566
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-5">
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
        Images designed by{" "}
        <a
            href="http://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
        >
            Freepik
        </a>
        </p>
      </div>
      

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} Beyond Silence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
