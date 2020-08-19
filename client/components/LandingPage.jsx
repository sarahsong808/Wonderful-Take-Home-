import React from 'react';
import NavigationBar from './NavigationBar';
import CarSlideShow from './CarSlideshow'; 

const LandingPage = props => {
    
    return (
        <div>
            <div>
            <NavigationBar />
            </div>
            <div>
            <CarSlideShow />
            </div>
            <h1>Landing Page</h1> 
        </div>
    )
};

export default LandingPage;