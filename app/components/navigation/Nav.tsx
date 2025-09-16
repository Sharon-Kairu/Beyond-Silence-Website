import React from 'react'
import Image from 'next/image'
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from '@/constants/constants';
import Link from "next/link";

type Props={openNav: ()=>void}

    
const Nav = ({openNav}:Props) => {
  return (
    <div className='h-[19vh] z-[10000] w-full fixed flex items-center bg-gray-900'>
        <div className=' p-5 flex items-center space-x-3.5' >
            <div className='w-20 h-20 bg-white flex rounded-full items-center justify-center'>
                <Image
                    src='/icon.png'
                    alt='Beyond Silence Icon'
                    width={30}
                    height={30}
                />                
            </div>
            
            <h1 className='text-4xl text-white font-bold'>Beyond <span className='text-purple-600 font-semibold'> Silence</span></h1>
        </div>

        <div className='hidden lg:flex items-center space-x-10 ml-60'>
            {NavLinks.map((link)=>
              <Link
                key={link.id}
                href={link.url}
                className='text-lg font-medium text-purple-400 hover:text-purple-800 transition-all duration-200 '>
                    {link.label}
                </Link>
            )}

        </div>

        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 text-white cursor-pointer ml-auto mr-10 lg:hidden" />
        
    </div>
  )
}

export default Nav