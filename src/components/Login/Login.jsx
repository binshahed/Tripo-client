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
    <div className='App p-5 my-5'>
      <div className='my-5'>
        <h1 className='mt-5'>Please Login </h1>
        <h5 className='text-warning'>
          We’re ready to help you, at Your Travel
        </h5>
        <h5>Get more things done with Loggin platform.</h5>
        <p className='text-warning'>
          Access to the most powerful feature in Tripo
        </p>

        <button
          onClick={handleGoogleSignIn}
          type='button'
          className='login-with-google-btn'
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
