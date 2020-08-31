import React from 'react';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';
import { Carousel } from 'react-responsive-carousel';

const CarSlideshow = ({ trims }) => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      stopOnHover={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      centerMode={true}
    >
      <div>
        <img src={sport} />
        <p className="car-type"> 2020 LS F SPORT</p>
        <p className="carousel-start-price">STARTING AT $81,450</p>
      </div>
      <div>
        <img src={hybrid} />
        <p className="car-type">2020 LS HYBRID</p>
        <p className="carousel-start-price"> STARTING AT $80,010 </p>
      </div>

      <div>
        <img src={ls} />
        <p className="car-type"> 2020 LS</p>
        <p className="carousel-start-price"> STARTING AT $75,450 </p>
      </div>
    </Carousel>
  );
};

export default CarSlideshow;
