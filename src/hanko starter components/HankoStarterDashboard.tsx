'use client'

import React,{ useState, useEffect } from 'react';
import './hanko-starter-style.css'

import { Hanko } from '@teamhanko/hanko-elements';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

interface HankoUser{
  user_id : string,
  email:string
}

const HankoStarterDashboard = () => {
  
  const [userState, setUserState] = useState<HankoUser>();
  
  const [hanko, setHanko] = useState<Hanko>();
  useEffect(() => setHanko(new Hanko(hankoApi ?? "")), []);

  useEffect(() => {
    hanko?.getUser().then((user) =>{
      setUserState({ 
        user_id: user.user_id ?? "Undefined", 
        email: user.emails?.[0].address ?? "Undefined"
      });
    })
  }, [hanko]);
  

  return (
    <div className='hankoStarterDashboard'>
      <h1>Dashboard</h1><br />
      <h2>Here is an example of using a custom Hook we made to get user data from Hanko using the Hanko Client.</h2>
      <h3>Email: {userState?.user_id}</h3>
      <h3>Id: {userState?.email}</h3>
    </div>
  )
}

export default HankoStarterDashboard