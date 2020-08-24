import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: black; 
opacity: 0.9;
height: 23vh; 
width: 13%;
color: white;
font-style: light;
font-weight: 300;
font-family: 'Open Sans', sans-serif;
padding: 15px 30px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
`;

const CarTitle = styled.div`
font-size: 42px;
font-family: 'Open Sans', sans-serif;
font-weight: 300;
`;

const CarSummary = styled.div`
font-size: 14px;
font-weight: 300;
`;

const Intro = styled.div`
font-size: 14px;
font-weight: 300;

`;
const CarDescription = props => {
return(
    <div>
        <Wrapper>
            <Intro>
                INTRODUCING THE NEW
            </Intro>
            <CarTitle>
                2020 LS HYBRID
             </CarTitle>
            <CarSummary>
                Built on the platform of the high-performance LS coupe, the LS 500 features our twin-turbocharged engine and offers meticulous craftsmanship like three premium wood-trim designs so unique they can take up to four months and 32 steps to complete
             </CarSummary>
        </Wrapper>
    </div>
)
}; 

export default CarDescription;