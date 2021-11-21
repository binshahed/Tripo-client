import './Package.css'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Package = props => {
  const {
    _id,
    package_name,
    package_detail,
    price,
    image,
    duration
  } = props.myPackage
  return (
    <Col>
      <Card>
        <div className='img-section'>
          <img className='card-image' src={image} alt='' />
        </div>
        {/* <Card.Img className="card-image" variant="top" src={service_image} /> */}
        <Card.Body>
          <Card.Title>{package_name}</Card.Title>
          <p>
            <strong>Duration: </strong>
            {duration}
          </p>
          <p>
            <strong>Price: </strong>
            {price}$
          </p>
          <Card.Text>{package_detail}</Card.Text>
          <Link to={`/package/${_id}`}>
            <Button variant='warning'>Book Package</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Package
