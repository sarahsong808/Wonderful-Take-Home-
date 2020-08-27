import React from 'react';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';
import { Carousel } from 'react-responsive-carousel'
import CarDescription from './CarDescription';

const CarSlideshow = ({trims}) => {

return(
            <Carousel showArrows={false} useKeyboardArrows autoPlay={true} stopOnHover={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} swipeable={true} emulateTouch={true}>
                
                    <div>
                        <img src={sport}/>
                        <p className="car-type"> 2020 LS F SPORT</p>
                        <p>STARTING AT $81,450</p>
                        <CarDescription />
                  </div>
                    <div>
                        <img src={hybrid} />
                        <p className="car-type">2020 LS HYBRID</p>
                        <p> STARTING AT $80,010 </p>
                        <CarDescription/>                    
                        </div>
               
                    <div>
                     <img src={ls} />
                     <p className="car-type"> 2020 LS</p>
                        <p> STARTING AT $75,450 </p>
                        <CarDescription/>

                    </div>
              
            </Carousel>

    )
}

export default CarSlideshow;