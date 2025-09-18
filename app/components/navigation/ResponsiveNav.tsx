'use client'
import React ,{useState}from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showMobile, setShowMobile]=useState(false);

    const openNavHandler=()=>setShowMobile(true);
    const closeNavHandler=()=>setShowMobile(false);
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <Nav openNav={openNavHandler}/>
        <MobileNav showNav={showMobile} closeNav={closeNavHandler}/>

    </div>
  )
}

export default ResponsiveNav