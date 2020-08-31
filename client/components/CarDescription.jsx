import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.9;
  width: 22%;
  color: white;
  font-style: light;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  position: absolute;
  top: 180px;
  left: 140px;
  height: 42vh;
`;

const CarTitle = styled.div`
  font-size: 35px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
`;

const CarSummary = styled.div`
  font-size: 12px;
  font-weight: 300;
  width: 100%;
`;

const Intro = styled.div`
  font-size: 13px;
  font-weight: 300;
`;
const DotToggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
`;

const CarDescription = ({ trims }) => {
  console.log(trims[0]);
  return (
    <Wrapper>
      <Intro>INTRODUCING THE NEW</Intro>
      <CarTitle>{trims[0].name}</CarTitle>
      <CarSummary>{trims[0].description}</CarSummary>
      <DotToggle>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </DotToggle>
    </Wrapper>
  );
};

export default CarDescription;
