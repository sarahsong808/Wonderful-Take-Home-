import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.9;
  width: 21%;
  color: white;
  font-style: light;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  padding: 15px 30px;
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
const DotToggle = styled.div`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const CarDescription = ({ name, description }) => {
  return (
    <Wrapper>
      <Intro>INTRODUCING THE NEW</Intro>
      <CarTitle>{name}</CarTitle>
      <CarSummary>{description}</CarSummary>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </Wrapper>
  );
};

export default CarDescription;
