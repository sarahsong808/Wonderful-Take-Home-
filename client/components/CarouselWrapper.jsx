import React from 'react';
import CarSlideshow from './CarSlideShow'; 
import CarDescription from './CarDescription';

const CarouselWrapper = props => {
    return (
        <div>
           <CarSlideshow/>
           <CarDescription/>
        </div>
    )
}

export default CarouselWrapper;