import React from 'react';
import { Carousel } from "react-bootstrap";
import "./MyCarousel.css";
import img1 from "../../Images/carousel1/img1.jpg";
import img2 from "../../Images/carousel1/img2.jpg"
import img3 from "../../Images/carousel1/img3.jpg"


const MyCarousel = () => {
  return (
    <div className='mycarousel'>
    <Carousel fade={true} pause={false} >
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Upcoming Shopping</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Upcoming Shopping</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
      <h3>Upcoming Shopping</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default MyCarousel