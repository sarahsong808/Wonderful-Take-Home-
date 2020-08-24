import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: black; 
opacity: 0.8;
height: 5vh; 
width: 10%;
color: white;
`;

const CarDescription = props => {
return(
    <div>
        <Wrapper>Car Description</Wrapper>
    </div>
)
}; 

export default CarDescription;