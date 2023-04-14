import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./MyCarousel2.css"


const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1024: {
        items: 3, 
        itemsFit: 'contain'
    },
};


const MyCarousel4 = (props) => {
   
  return (
    <div className='mycarousel2'>
    <AliceCarousel
    autoPlayInterval={300}
    autoPlay={true}
    // autoPlayStrategy="none"
    infinite={true}
    // mouseTracking
    autoPlayDirection={props.dir}
    disableDotsControls={true}
    disableButtonsControls={true}
    items={props.item3}
    responsive={responsive}
/>
</div>
  )
}

export default MyCarousel4





