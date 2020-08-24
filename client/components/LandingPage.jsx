import React from 'react';
import NavigationBar from './NavigationBar';
import CarouselWrapper from './CarouselWrapper';
import MapWrapper from './MapWrapper';

const LandingPage = props => {
    
    return (
        <div>
            <div>
            <NavigationBar />
            </div>
            <div>
            <CarouselWrapper />
            </div>
            <MapWrapper /> 
        </div>
    )
};

export default LandingPage;