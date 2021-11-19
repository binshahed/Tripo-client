import React from 'react'
import { useHistory, useLocation } from 'react-router'
import useAuth from '../context/useAuth'
import './Login.css'

const Login = () => {
  const { googleSignIn, user } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/'

  // google Sign in
  const handleGoogleSignIn = () => {
    googleSignIn(history, redirect_uri)
  }
  return (
    <div className='App p-5'>
      <h1 className='mb-5'>Please Login </h1>
      <button
        onClick={handleGoogleSignIn}
        type='button'
        className='login-with-google-btn'
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
