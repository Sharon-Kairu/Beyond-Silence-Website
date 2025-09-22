import React from 'react'
import Image from 'next/image'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    <div className='m-10 bg-gradient-to-br from-purple-100 via-white to-orange-100 border-2 border-orange-200 rounded-3xl shadow-2xl '>
      <div className='p-8 flex flex-col items-center'>
          <h1 className='text-[#0fa0a3] font-bold text-4xl mt-6'> Meet the team</h1>
          <div className='bg-[#22c9cc] w-60 h-2 rounded-full mt-4'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-x-5 space-y-5 items-center p-8 relative overflow-hidden'>
         

          <TeamMember
              name="Member 1"
              role="Role 1"
              imageUrl="/member_1.webp"
          />
          <TeamMember
              name="Member 1"
              role="Role 1"
              imageUrl="/member_1.webp"
          />
          <TeamMember
              name="Member 1"
              role="Role 1"
              imageUrl="/member_1.webp"
          />
          <TeamMember
              name="Member 1"
              role="Role 1"
              imageUrl="/member_1.webp"
          />
          <TeamMember
              name="Member 1"
              role="Role 1"
              imageUrl="/member_1.webp"
          />
      </div>
    </div>
  )
}

export default Team