import React from 'react'
import Image from 'next/image'

const Start = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-cover bg-center"
      style={{ backgroundImage: "url('/blog_bg.webp')" }}
    >
      <Image
         src='/community2.png'
         alt='Community'
         width={400}
         height={400}
         className='mt-4'
      />
      <div className='m-10 bg-white border rounded-xl p-10 flex flex-col items-center '> 
        <h1 className='text-gray-900 text-4xl font-bold'>Beyond Silence</h1>
        <div className="bg-purple-400 w-60 h-2 rounded-full mt-4"></div>
        <p className='mt-6'>
          Beyond Silence is a safe and supportive space where you can openly share what you’re going 
          through without fear of judgment. Here, your voice matters, your struggles are acknowledged,
           and you can connect with understanding hearts ready to listen and help. Whether you need to 
           express your thoughts, seek guidance, or simply feel heard, Beyond Silence is here to provide 
           comfort, support, and hope."
        </p>
      </div>
      
    </div>
  )
}

export default Start