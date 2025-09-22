import React from 'react'
import Image from 'next/image'

const Donations = () => {
  return (
    <div className='m-10 bg-gradient-to-br from-purple-100 via-white to-orange-100 border-2 border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 relative overflow-hidden'>
        <h1 className='text-[#0fa0a3] font-bold text-4xl mt-6 '> Want to make a donation to us?</h1>
        <div className='bg-[#22c9cc] w-60 h-2 rounded-full mt-4'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center space-x-0.5'>
            <Image
                src='/donate.jpg'
                alt='donation image'
                width={350}
                height={350}
                className="object-contain rounded-2xl mix-blend-multiply"
            />

            <div className='p-8 bg-white bg-opacity-70 rounded-2xl m-4 shadow-lg'>
                <p className='text-3xl text-[#0fa0a3]'>You can make a donation to us via Mpesa</p>
                <h1 className='pt-5'>PAYBILL: <strong> 112233</strong></h1>
                <h1 className='pt-5 '>ACCOUNT NUMBER: <strong> 445566</strong></h1>
            </div>
                

        </div>
    </div>
  )
}

export default Donations