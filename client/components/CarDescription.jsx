import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: black; 
opacity: 0.9;
height: 40vh; 
width: 22%;
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
const CarDescription = ({name, description}) => {

    

return(
    <div>
        <Wrapper>
            <Intro>
                INTRODUCING THE NEW
            </Intro>
            <CarTitle>
                {name}
             </CarTitle>
            <CarSummary>
                {description}
             </CarSummary>
        </Wrapper>
    </div>
)
}; 

export default CarDescription;