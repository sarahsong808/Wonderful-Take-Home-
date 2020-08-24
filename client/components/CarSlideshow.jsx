import React from 'react';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';



const CarSlideshow = props => {

    return (
        <div>
        <img src={sport} />
        <img src={hybrid} />
        <img src={ls} />
        </div>
    )
}

export default CarSlideshow;