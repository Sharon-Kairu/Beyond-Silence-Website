import React from 'react'
import Image from 'next/image'
import { FaMoneyBillWave, FaRegCreditCard } from "react-icons/fa";

const Donations = () => {
  return (
    <div id='donate' className='m-4 lg:m-8bg-gradient-to-b from-purple-200/40 to-transparent z-0  border-2 border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 relative overflow-hidden'>
        <h1 className='text-[#0fa0a3] font-bold text-4xl mt-6 '> Want to make a donation to us?</h1>
        <div className='bg-[#22c9cc] w-60 h-2 rounded-full mt-4'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center space-x-0.5'>
            <Image
                src='/donate.jpg'
                alt='donation image'
                width={350}
                height={350}
                className="object-contain rounded-2xl mix-blend-multiply ml-12"
            />

          <div className="p-8 rounded-2xl m-4 ">
            <p className="text-3xl font-bold text-[#0fa0a3] text-center">
              You can support us with a donation via Mpesa
            </p>

            <div className="flex items-center gap-3 pt-6">
              <FaMoneyBillWave className="text-green-600 text-2xl" />
              <h1 className="text-xl text-gray-800">
                PAYBILL: <strong className="text-purple-700">112233</strong>
              </h1>
            </div>

            <div className="flex items-center gap-3 pt-5">
              <FaRegCreditCard className="text-pink-500 text-2xl" />
              <h1 className="text-xl text-gray-800">
                ACCOUNT NUMBER: <strong className="text-purple-700">445566</strong>
              </h1>
            </div>
          </div>
                

        </div>
    </div>
  )
}

export default Donations