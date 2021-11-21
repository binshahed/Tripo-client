import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import useAuth from '../context/useAuth'

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useAuth()
  useEffect(() => {
    setIsLoading(true)
    fetch('https://infinite-everglades-05408.herokuapp.com/booking')
      .then(res => res.json())
      .then(data => {
        setOrders(data?.filter(order => order.email === user.email))
        setIsLoading(false)
      })
  }, [])

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete')
    const url = `https://infinite-everglades-05408.herokuapp.com/booking/${id}`
    if (proceed) {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders)
          }
        })
    }
  }

  if (isLoading) {
    return (
      <div className='App my-5'>
        <Spinner animation='border' variant='warning' />
      </div>
    )
  }

  //   const myOrders = orders?.filter(order => order.email === user.email)
  return (
    <div className='container my-5'>
      {orders.length > 0 ? (
        <h1 className='text-center my-5'>Your packages</h1>
      ) : (
        <h1 className='text-center my-5'>
          Please Order a Package <br /> you have no any packages
        </h1>
      )}
      <div className='row'>
        {orders.map(order => (
          <div className='col-md-3' key={order._id}>
            <img style={{ width: '100%' }} src={order.package.image} alt='' />
            <h5> {order.package.package_name}</h5>
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Order Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <Button
              className='my-2'
              onClick={() => handleDelete(order._id)}
              variant='warning'
            >
              Cancel Order
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders
