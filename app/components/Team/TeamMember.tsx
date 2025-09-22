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
        <Image
           src={imageUrl}
           alt={`${name}'s photo`}
           width={350}
           height={350}
           className=' rounded-2xl mb-4 p-5'
        />
        <h1 className='text-4xl font-bold text-[#22c9cc]'>{name}</h1>
        <p className='text-lg text-gray-700 mt-2'>{role}</p>

    </div>
  )
}

export default TeamMember