import React from 'react';
import styled from 'styled-components';
import AvailableCar from './AvailableCar';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 40vh;
`;

const TrimAvailability = ({ selectedDealer, trims, dealerships }) => {
  //typically fetch this information in a useEffect hooks but hardcoded it here
  const matchingImg = {
    'LS HYBRID': hybrid,
    'LS F SPORT': sport,
    LS: ls,
  };

  const matchingPrice = {
    'LS HYBRID': 80010,
    'LS F SPORT': 81450,
    LS: 75450,
  };
  // const trims = {0: ['LS HYBRID', 'LS F SPORT', 'LS'], 1 : ['LS HYBRID', 'LS F SPORT', 'LS'], 2: ['LS F SPORT'], 3: ['No Trims Available'] }
  //const dealerships = [{name: 'Brooklyn, NY', lat: 40.6782, long: -73.9442, id: 0}, {name: 'Queens, NY', lat: 40.7282, long: -73.7949, id: 1}, {name: 'Newark, NJ', lat: 40.7357, long: -74.1724, id: 2}, {name: 'Plainfield, NJ', lat: 40.6337, long: -74.4074, id: 3}]

  const selectedTrims = trims[selectedDealer];
  const eachTrim = selectedTrims.map((el, idx) => (
    <AvailableCar
      name={el}
      img={matchingImg[el]}
      price={matchingPrice[el]}
      key={idx}
    />
  ));
  return (
    <div className="trim-avail-container">
      <Wrapper>
        <h2> Availability for {dealerships[selectedDealer].name}:</h2>
        {eachTrim}
      </Wrapper>

      <button id="clear-selection">CLEAR SELECTION</button>
    </div>
  );
};

export default TrimAvailability;
