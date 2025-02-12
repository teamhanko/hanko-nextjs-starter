
'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

import LogoutButton from '@/components/LogoutButton'

import { useState, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

import './hanko-starter-style.css'

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

interface HankoUser {
  id: string;
  email: string;
  loading: boolean;
  error: string | null;
}

const HankoStarterHeader = () => {

  const [hanko, setHanko] = useState<Hanko>();
  const [userState, setUserState] = useState<HankoUser>({
    id: "",
    email: "",
    loading: true,
    error: null,
  });
  
  useEffect(() => setHanko(new Hanko(hankoApi)), []);
  
  useEffect(() => {
    hanko?.user
      .getCurrent()
      .then(({ id, email }) => {
        setUserState({ id, email, loading: false, error: null });
      })
      .catch((error) => {
        setUserState((prevState) => ({ ...prevState, loading: false, error }));
      });
  }, [hanko]);

  const pathname = usePathname()

  let menu =           
  <Link href={'/profile'}>
    <button>Profile options</button>
  </Link>;

  if(pathname.includes('profile')){
    menu = 
    <Link href={'/dashboard'}>
      <button>Back to dashboard</button>
    </Link>
  }

  
  return (
    <div className='starterHeader'>
      <div className='headerGap'></div>
      <div className='userMenu'>
        <div className='userInfo'>
          <h1>{userState.email}</h1>
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