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
      <h1>This is an example dashboard page.</h1><br />
      <h2>Due to the authentication in our MiddleWare script you are not able to access this page without being signed in.</h2>
      <br /><br /><br />
      <h2>To log out or change your profile settings like ´Emails´ , ´Password´ , ´Passkeys´ , ´Security keys´ and ´Sessions´  please click the button in the top right.</h2>
      <br /><br /><br />
      <h2>Here is an example of using a custom Hook we made to get user data from Hanko using the Hanko Client.</h2>
      <br />
      <h3>Email: {email}</h3>
      <h3>Id: {id}</h3>
    </div>
  )
}

export default HankoStarterDashboard