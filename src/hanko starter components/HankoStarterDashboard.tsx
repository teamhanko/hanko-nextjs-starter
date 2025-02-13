'use client'

import React from 'react'
import './hanko-starter-style.css'

import { useUserData } from '@/hooks/useUserData';
import { useSessionData } from '@/hooks/useSessionData';

const HankoStarterDashboard = () => {

  const { id, email, loading: userDataLoading, error: userDataError } = useUserData();
  const { userID, jwt, isValid, loading: sessionDataLoading, error: sessionDataError } = useSessionData();

  return (
    <div className='hankoStarterDashboard'>
      <h1>Dashboard</h1><br />
      <h2>Here is an example of using a custom Hook we made to get user data from Hanko using the Hanko Client.</h2>
      <h3>Email: {email}</h3>
      <h3>Id: {id}</h3>
    </div>
  )
}

export default HankoStarterDashboard