import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const AllOrders = () => {
  const [orders, setOrders] = useState([])
  const [approved, seApproved] = useState({})
  useEffect(() => {
    fetch('http://localhost:5000/booking')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [approved])

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete')
    if (proceed) {
      const url = `http://localhost:5000/booking/${id}`
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

  const handleUpdateStatus = id => {
    const approvedData = orders?.find(order => order._id === id)
    approvedData.status = 'Approved'
    console.log(approvedData)

    const url = `http://localhost:5000/booking/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(approvedData)
    })
      .then(res => res.json())
      .then(data => {
        alert('order is Approved')
        seApproved(data)
      })
  }

  return (
    <div className='container'>
      {orders.length > 0 ? (
        <h1 className='text-center my-5'>All Orders</h1>
      ) : (
        <h1 className='text-center my-5'>Please Order a Package</h1>
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

            {(order.status === 'Approved' && (
              <Button
                disabled
                variant='success'
                className='mx-1'
                onClick={() => handleUpdateStatus(order._id)}
              >
                Approve order
              </Button>
            )) || (
              <Button
                variant='success'
                className='mx-1'
                onClick={() => handleUpdateStatus(order._id)}
              >
                Approve order
              </Button>
            )}

            <Button
              className='my-3'
              onClick={() => handleDelete(order._id)}
              variant='danger'
            >
              Reject Order
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllOrders
