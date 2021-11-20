import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Redirect, Route } from 'react-router'
import useAuth from '../context/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth()
  if (isLoading) {
    return (
      <div className='App my-5'>
        <Spinner animation='border' variant='warning' />
      </div>
    )
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          ></Redirect>
        )
      }
    ></Route>
  )
}

export default PrivateRoute
