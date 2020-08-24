import React from 'react';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';
import { Carousel } from 'react-responsive-carousel'


const CarSlideshow = props => {

    return (
        <div className="car-carousel">
            <Carousel showArrows={false} useKeyboardArrows autoPlay={true} stopOnHover={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} dynamicHeight={true} swipeable={true} emulateTouch={true}>
                <div>
                    <tbody>
                        <img src={sport}/>
                        <p> 2020 LS F SPORT</p>
                        <p>STARTING AT $81,450</p>
                    </tbody>
                </div>
                <div>
                    <tbody>
                        <img src={hybrid} />
                        <p>2020 LS HYBRID</p>
                        <p> STARTING AT $80,010 </p>
                    </tbody>
                </div>
                <div>
                    <tbody>
                     <img src={ls} />
                     <p>2020 LS</p>
                        <p> STARTING AT $75,450 </p>
                    </tbody>
                </div>
            </Carousel>
        </div>
    )
}

export default CarSlideshow;