import React from 'react';
import Image from 'next/image';

type MemberProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const TeamMember = ({ name, role, imageUrl }: MemberProps) => {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-70 rounded-2xl p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto">
      
      {/* Image */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={`${name}'s photo`}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#22c9cc] mt-3 sm:mt-4 text-center">
        {name}
      </h1>

      {/* Role */}
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-1 sm:mt-2 text-center">
        {role}
      </p>

    </div>
  );
};

export default TeamMember;
