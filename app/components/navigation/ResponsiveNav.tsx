'use client'
import React ,{useState}from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showMobile, setShowMobile]=useState(false);

    const openNavHandler=()=>setShowMobile(true);
    const closeNavHandler=()=>setShowMobile(false);
  return (
    <div >
        <Nav openNav={openNavHandler}/>
        <MobileNav showNav={showMobile} closeNav={closeNavHandler}/>

    </div>
  )
}

export default ResponsiveNav