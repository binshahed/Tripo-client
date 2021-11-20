import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import useAuth from '../context/useAuth'

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const { user } = useAuth()
  useEffect(() => {
    fetch('http://localhost:5000/booking')
      .then(res => res.json())
      .then(data =>
        setOrders(data?.filter(order => order.email === user.email))
      )
  }, [])
  //   const myOrders = orders?.filter(order => order.email === user.email)
  console.log(orders)
  return (
    <div className='container'>
      <h1 className='text-center my-5'>My Orders</h1>
      <div className='row'>
        {orders.map(order => (
          <div className='col-md-3' key={order._id}>
            <img style={{ width: '100%' }} src={order.package.image} alt='' />
            <h5>Package: {order.package.package_name}</h5>
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Order Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <Button variant='warning'>Cancel Order</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders
