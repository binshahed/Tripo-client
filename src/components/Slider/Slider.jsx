import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../image/slider-image/slide-2.jpg";
import slide2 from "../../image/slider-image/slide-3.jpg";
import slide3 from "../../image/slider-image/slide-4.jpg";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>Travel is the only thing you buy that makes you richer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <h3>It feels good to be lost in the right direction</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Life is a journey, not a destination</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
