import React from 'react';
import NavigationBar from './NavigationBar';
import CarouselWrapper from './CarouselWrapper';
import MapWrapper from './MapWrapper';

const LandingPage = props => {
    const trims = [{name: '2020 LS F SPORT', img: '../assets/ls-f-sport.jpg', start: '$81,450', description: "Built on the platform of the high-performance LS coupe, the LS 500 features our twin-turbocharged engine and offers meticulous craftsmanship like three premium wood-trim designs so unique they can take up to four months and 32 steps to complete", secondSlide: "Hell World"}, {name: '2020 LS HYBRID', img: '../assets/ls-hybrid.jpg', start: '$80,010'}, {name: '2020 LS', img: '../assets/ls.jpg', start: '$75,450'}]
    const [user, setUser] = useState(''); 

    return (
        <div id="main-container">
            <div>
            <NavigationBar user={user}/>
            </div>
            <div id="carousel-wrapper">
            <CarouselWrapper trims={trims}/>
            </div>
            <MapWrapper /> 
        </div>
    )
};

export default LandingPage;