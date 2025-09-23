import React from 'react'
import Image from 'next/image'
import { MdEmail, MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div  id='contact' className='m-10 bg-gradient-to-b from-purple-200/40 to-transparent z-0  border-2 border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 relative overflow-hidden'>
        <h1 className='text-orange-500 font-bold text-4xl mt-6 '> How to get in touch with us</h1>
        <div className='bg-orange-400 w-60 h-2 rounded-full mt-4'></div>

         <div className='grid grid-cols-1 md:grid-cols-2 items-center space-x-6'>

          <div className="p-8 bg-gradient-to-br from-white via-purple-50 to-teal-50 rounded-3xl m-6 shadow-xl text-center relative overflow-hidden">
  <h2 className="text-3xl font-bold text-[#0fa0a3] mb-6">
    ✨ You can reach us through ✨
  </h2>

  <div className="mt-6 space-y-6">
    {/* Email */}
    <div className="flex items-center justify-center space-x-3">
      <MdEmail className="text-purple-600 w-7 h-7" />
      <h1 className="text-2xl text-purple-700 font-semibold">
        Email:{" "}
        <a
          href="mailto:beyondsilence@gmail.com"
          className="font-bold text-gray-800 hover:text-[#0fa0a3] transition-colors"
        >
          beyondsilence@gmail.com
        </a>
      </h1>
    </div>

    <p className="text-lg text-gray-600 font-medium">or</p>

    {/* Phone */}
    <div className="flex items-center justify-center space-x-3">
      <MdCall className="text-teal-600 w-7 h-7" />
      <h1 className="text-2xl text-teal-700 font-semibold">
        Phone:{" "}
        <a
          href="tel:0733445566"
          className="font-bold text-gray-800 hover:text-[#0fa0a3] transition-colors"
        >
          0733 445 566
        </a>
      </h1>
    </div>
  </div>

  {/* Decorative floating shapes */}
  <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal-200 rounded-full opacity-30 animate-pulse"></div>
</div>

            <Image
                src='/contact.jpg'
                alt='donation image'
                width={350}
                height={350}
                className="object-contain rounded-2xl mix-blend-multiply"
            />

           
        </div>        
    </div>
  )
}

export default Contact
