import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div className='m-10 bg-gradient-to-br from-purple-100 via-white to-orange-100 border-2 border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 relative overflow-hidden'>
        <div className='p-8 flex flex-col items-center'>
          <h1 className='text-[#0fa0a3] font-bold text-4xl mt-6'>Our Services</h1>
          <div className='bg-[#22c9cc] w-60 h-2 rounded-full mt-4'></div>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full'>

        <Service
            iconUrl="/support.jpg"
            title="Supportive Forums"
            description='Join our safe and welcoming online forums where every voice matters.
                Share your experiences, ask questions, and receive encouragement from others who truly understand.
                It’s a space built on compassion, connection, and respect.'
        />
        <Service
            iconUrl="/community_events.jpg"
            title="Community Events"
            description='Be part of our healing circles, awareness walks, and uplifting gatherings.
                Whether online or in person, our events foster unity, resilience, and shared healing.
                Together, we create moments of hope and belonging.'
        />
        <Service
            iconUrl="/Mentorship.jpg"
            title="Mentorship Opportunities"
            description='Connect with mentors who have walked a similar path and are ready to guide.
                Our mentorship program pairs members with experienced individuals offering empathy and wisdom.
                It’s about learning, growing, and finding strength in shared journeys.'
        />

       </div>

    </div>
  )
}

export default Services