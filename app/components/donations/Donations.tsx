import React from 'react';
import Image from 'next/image';
import { FaMoneyBillWave, FaRegCreditCard } from "react-icons/fa";

const Donations = () => {
  return (
    <div
      id="donate"
      className="m-4 lg:m-8 bg-gradient-to-b from-purple-200/40 to-transparent z-0 border-2 border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-6 sm:p-8 md:p-10 relative overflow-hidden"
    >
      {/* Header */}
      <h1 className="text-[#0fa0a3] font-bold text-2xl sm:text-3xl md:text-4xl mt-4 sm:mt-6 text-center">
        Want to make a donation to us?
      </h1>
      <div className="bg-[#22c9cc] w-40 sm:w-60 h-2 rounded-full mt-3 sm:mt-4"></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 mt-6">
        {/* Donation Image */}
        <Image
          src="/donate.jpg"
          alt="donation image"
          width={350}
          height={350}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto object-contain rounded-2xl mix-blend-multiply"
        />

        {/* Donation Info */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white bg-opacity-70 mx-4 text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0fa0a3]">
            You can support us with a donation via Mpesa
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-6">
            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-green-600 text-xl sm:text-2xl" />
              <h1 className="text-base sm:text-lg md:text-xl text-gray-800">
                PAYBILL: <strong className="text-purple-700">112233</strong>
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-4">
            <div className="flex items-center gap-3">
              <FaRegCreditCard className="text-pink-500 text-xl sm:text-2xl" />
              <h1 className="text-base sm:text-lg md:text-xl text-gray-800">
                ACCOUNT NUMBER: <strong className="text-purple-700">445566</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
