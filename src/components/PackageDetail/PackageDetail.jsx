import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import usePackages from '../../hooks/usePackages'
import { useForm } from 'react-hook-form'
import './PackageDetail.css'
import useAuth from '../context/useAuth'
import axios from 'axios'

const PackageDetail = () => {
  const { id } = useParams()
  const [packages] = usePackages()
  console.log(packages)
  const packageFound = packages.find(myPackage => myPackage._id === id)
  const { user } = useAuth()

  //react hook format
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    data.package = packageFound
    data.status = 'pending'

    axios.post('http://localhost:5000/booking', data).then(res => {
      if (res.data.insertedId) {
        alert('added successfully')
        reset()
      }
    })
    console.log(data)
  }
  return (
    <div className='container package-detail'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='my-5'>
            <h2 className='text-center'>{packageFound?.package_name}</h2>
            <img src={packageFound?.image} alt='' />
            <h5 className='my-3'>
              <span className='text-light bg-dark px-5 py-2'>
                Price: {packageFound?.price}$
              </span>{' '}
            </h5>
            <p className='my-4'>
              <span className='text-light bg-dark px-5 py-2'>
                Duration: {packageFound?.duration}$
              </span>{' '}
            </p>
            <p>{packageFound?.package_detail}</p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='my-5'>
            <h2 className='text-center'>Book This Tour</h2>
            <Form className='booking-form' onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user?.displayName}
                placeholder='Name'
                className='form-control'
                {...register('name')}
              />
              <input
                defaultValue={user?.email}
                placeholder='Email'
                className='form-control'
                {...register('email')}
              />
              <input
                placeholder='phone'
                className='form-control'
                {...register('phone')}
              />
              <input
                placeholder='date'
                className='form-control'
                type='text'
                {...register('date')}
              />
              <textarea
                className='form-control'
                placeholder='Message'
                {...register('message')}
              />

              <input className='btn btn-warning' type='submit' />
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageDetail
