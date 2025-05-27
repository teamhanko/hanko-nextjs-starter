'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

import LogoutButton from '@/components/LogoutButton'
import { useUserData } from '@/hooks/useUserData';

import './hanko-starter-style.css'

const HankoStarterHeader = () => {

  const { email } = useUserData();

  const pathname = usePathname()

  let menu =  (
    <Link href={'/profile'}>
      <button>Profile</button>
    </Link>
  )     


  if(pathname.includes('profile')){
    menu = (
      <Link href={'/dashboard'}>
        <button>Dashboard</button>
      </Link>
    )
  }
  
  return (
    <div className='starterHeader'>
      <div className='headerGap'></div>
      <div className='userMenu'>
        <div className='userInfo'>
          <h1>{email}</h1>
          <img src="/userpfp.png"/>
          <img src="/expand.png" className='expandIcon'/>
        </div>
        <div className='userDropdown'>
          {menu}
          <LogoutButton></LogoutButton>
        </div>
      </div>
    </div>  
  )
}

export default HankoStarterHeader