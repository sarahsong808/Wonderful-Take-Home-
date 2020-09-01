import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.9;
  width: 25%;
  color: white;
  font-style: light;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  position: absolute;
  top: 160px;
  left: 110px;
  height: 36vh;
  @media only screen and (max-width: 768px) {
    height: 15vh;
    width: 75%;
    left: 10%;
    top: 78%;
    padding: 10px 10px;
    position: relative;
  }
`;

const CarTitle = styled.div`
  font-size: 35px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const CarSummary = styled.div`
  font-size: 12px;
  font-weight: 300;
  width: 100%;
  @media only screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

const Intro = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin-block-end: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 7px;
  }
`;
const DotToggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
  @media only screen and (max-width: 768px) {
    width: 18%;
  }
`;

const CarDescription = ({ trims }) => {
  //i'd use similar logic to that of map pins here

  return (
    <Wrapper>
      <CarTitle>
        {' '}
        <Intro>INTRODUCING THE NEW</Intro>
        {trims[0].name}
      </CarTitle>
      <CarSummary>{trims[0].description}</CarSummary>
      <DotToggle>
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </DotToggle>
    </Wrapper>
  );
};

export default CarDescription;
