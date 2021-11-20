import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import usePackages from '../../hooks/usePackages'
import Package from '../Package/Package'

const OurPackages = () => {
  const [packages] = usePackages()
  console.log(packages)

  return (
    <div className='App container'>
      <h1 className='my-5'>Our Packages</h1>

      <Row xs={1} md={3} sm={1} className='g-4'>
        {packages.map(myPackage => (
          <Package key={myPackage._id} myPackage={myPackage} />
        ))}
      </Row>
    </div>
  )
}

export default OurPackages
