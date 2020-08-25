import React from 'react';
import CarSlideshow from './CarSlideShow'; 
import CarDescription from './CarDescription';

const CarouselWrapper = props => {
    //I'd be pulling from data preferably with graphql to make a request only for these queries
    return (
        <div>
           <CarSlideshow trims={props}/>
        </div>
    )
}

export default CarouselWrapper;