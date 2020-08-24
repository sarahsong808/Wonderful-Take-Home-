import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
height: 70vh; 
background-color: pink;
`;


const TrimAvailability = ({selectedDealer, trims, dealerships}) => {

    return (
            <div className='trim-availability'> 
            <Wrapper>
                <h2> Availability for {dealerships[selectedDealer].name}</h2>
            {trims[selectedDealer]}
            </Wrapper>
            </div>
    )
}

export default TrimAvailability;