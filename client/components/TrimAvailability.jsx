import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
background-color: pink;
position: relative;
margin: 0 auto;    
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