import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
position: relative;
margin-left: 35px;
`;


const TrimAvailability = ({selectedDealer, trims, dealerships}) => {

    return (
            <div className='trim-availability'> 
            <Wrapper>
                <h2> Availability for {dealerships[selectedDealer].name}:</h2>
            {trims[selectedDealer]}
            </Wrapper>
            </div>
    )
}

export default TrimAvailability;