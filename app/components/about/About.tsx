import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
      <div className="m-4 lg:m-8 bg-gradient-to-b from-purple-200/40 to-transparent z-0  border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 relative overflow-hidden">
        
        <h1 className="text-orange-500 font-bold text-4xl mt-6">About Us</h1>
        <div className="bg-orange-400 w-60 h-2 rounded-full mt-4"></div>

        <div className="mt-6 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <video
            src="/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="mt-4 mix-blend-multiply rounded-xl"
          />

          <div className="flex flex-col justify-center">
            <p className="m-1 md:m-3 text-gray-800 text-lg leading-relaxed">
              Founded in July 2025, Beyond Silence is a community dedicated to
              mental wellness and support. We provide a safe space for
              individuals to share their thoughts and experiences openly. Our
              mission is to listen, empower, and connect people facing emotional
              challenges. Through compassionate dialogue and guided resources,
              we foster personal growth and healing. We believe every voice
              matters and every story deserves to be heard without judgment. Our
              team of volunteers and experts work together to create a nurturing
              environment. Join us in building a community where understanding,
              support, and hope thrive.
            </p>
          </div>
        </div>

        {/* Optional: playful floating shapes */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
      </div>
    
  )
}

export default About
