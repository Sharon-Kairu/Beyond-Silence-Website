import React from 'react'
import Image from 'next/image'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    <div 
      id="team"
      className='m-10 bg-gradient-to-b from-purple-200/40 to-transparent z-0 border-2 border-orange-200 rounded-3xl shadow-2xl '>
      <div className='p-8 flex flex-col items-center'>
          <h1 className='text-[#0fa0a3] font-bold text-4xl mt-6'> Meet the team</h1>
          <div className='bg-[#22c9cc] w-60 h-2 rounded-full mt-4'></div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2  space-x-5 space-y-5 items-center p-8 relative overflow-hidden'>
         

          <TeamMember
              name="Sawia Hassan"
              role="Founder & Chairperson"
              imageUrl="/Sawia.jpeg"
          />
          <TeamMember
              name="Asiya Mohamed"
              role="Founder & Programs Director and coordinator"
              imageUrl="/Asiya.jpeg"
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