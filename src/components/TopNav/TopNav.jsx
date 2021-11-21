import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../image/logo-light.png'
import useAuth from '../context/useAuth'
import './TopNam.css'

const TopNav = () => {
  const { user, handleSignOut } = useAuth()
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img src={logo} alt='logo' />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'>Home</Link>
            <Link to='/packages'>Packages</Link>

            {user.email && <Link to='/myOrders'>My Orders</Link>}
            {user.email && <Link to='/allOrders'>Manage all Orders</Link>}
            {user.email && <Link to='/addPackage'>Add Package</Link>}
            <Link to='/about'>About Us</Link>
            <Link to='/guides'>Guides</Link>
          </Nav>
          <div>
            {user?.email && (
              <img
                style={{ width: '10%', borderRadius: '50%' }}
                src={user.photoURL}
                alt=''
              />
            )}
            {user.email && (
              <span className='text-warning px-2'>{user?.displayName}</span>
            )}
            {user.email ? (
              <Button variant='warning' onClick={handleSignOut}>
                logout
              </Button>
            ) : (
              <Link to='/login'>
                <Button variant='warning'>Login</Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav
