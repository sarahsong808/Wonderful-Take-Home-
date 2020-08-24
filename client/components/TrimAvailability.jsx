import React from 'react';

const TrimAvailability = ({selectedDealer, trims}) => {

    return (
            <div> 
            {trims[selectedDealer]}
            </div>
    )
}

export default TrimAvailability;