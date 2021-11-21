import axios from 'axios'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const AddPackages = () => {
  //react hook format
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    axios
      .post('https://infinite-everglades-05408.herokuapp.com/packages', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('added successfully')
          reset()
        }
      })
    console.log(data)
  }
  return (
    <div className='my-5 container package-detail'>
      <h1 className='text-center my-4'>Create A New Package</h1>
      <Form className='booking-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Package Name'
          className='form-control'
          {...register('package_name')}
        />
        <input
          placeholder='Package Duration'
          className='form-control'
          {...register('duration')}
        />
        <input
          placeholder='Package Price'
          className='form-control'
          {...register('price')}
        />
        <input
          placeholder='Image url'
          className='form-control'
          type='text'
          {...register('image')}
        />
        <textarea
          className='form-control'
          placeholder='Package Detail'
          {...register('package_detail')}
        />

        <input
          className='btn btn-warning'
          value='Add A New Package'
          type='submit'
        />
      </Form>
    </div>
  )
}

export default AddPackages
