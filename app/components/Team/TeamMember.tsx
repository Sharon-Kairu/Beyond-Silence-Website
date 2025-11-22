import React from 'react'
import Image from 'next/image';

type MemberProps={
    name: string;
    role: string;
    imageUrl: string;
};

const TeamMember = ({name,role,imageUrl}:MemberProps) => {
  return (
    <div className='flex flex-col items-center bg-white bg-opacity-70 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className="w-[300px] h-[300px] overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={`${name}'s photo`}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

        
        <h1 className='text-4xl font-bold text-[#22c9cc]'>{name}</h1>
        <p className='text-lg text-gray-700 mt-2'>{role}</p>

    </div>
  )
}

export default TeamMember