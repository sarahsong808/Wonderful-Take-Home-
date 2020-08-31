import React from 'react';
import CarSlideshow from './CarSlideShow';
import CarDescription from './CarDescription';

const CarouselWrapper = ({ trims }) => {
  //I'd be pulling from data preferably with graphql to make a request only for these queries
  // console.log('props in carouselwrapper', trims);

  return (
    <div>
      <CarSlideshow trims={trims} />
      <CarDescription trims={trims} />
    </div>
  );
};

export default CarouselWrapper;
