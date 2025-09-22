import React from 'react'
import Image from 'next/image'

type ServiceProps = {
  iconUrl: string
  title: string
  description: string
}

const Service = ({ iconUrl, title, description }: ServiceProps) => {
  return (
    <div className="flex flex-col items-center bg-green-50 p-4 rounded-2xl shadow-md">
      {/* Fixed height container for consistent alignment */}
      <div className="h-60 flex items-center justify-center">
        <Image
          src={iconUrl}
          alt={title}
          width={230}
          height={230}
          className="object-contain rounded-2xl mix-blend-multiply"
        />
      </div>

      <h1 className="text-2xl font-bold text-[#22c9cc] mt-4">{title}</h1>
      <p className="text-lg text-gray-700 mt-2 mb-4 text-center px-4">
        {description}
      </p>
    </div>
  )
}

export default Service
