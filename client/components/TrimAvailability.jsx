import React from 'react';
import AvailableCar from './AvailableCar';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';

const TrimAvailability = ({
  selectedDealer,
  trims,
  dealerships,
  setSelectedDealer,
  setToggled,
}) => {
  //typically fetch this information in a useEffect hooks but hardcoded it here
  const matchingImg = {
    '2020 LS': ls,
    '2020 LS F SPORT': sport,
    '2020 LS HYBRID': hybrid,
  };

  const matchingPrice = {
    '2020 LS': 75450,
    '2020 LS F SPORT': 81450,
    '2020 LS HYBRID': 80010,
  };

  const selectedTrims = trims[selectedDealer];
  const eachTrim = selectedTrims.map((el, idx) =>
    el !== 'None Available' ? (
      <AvailableCar
        name={el}
        img={matchingImg[el]}
        price={matchingPrice[el]}
        key={idx}
      />
    ) : (
      <div>
        {' '}
        <h4 className="no-trims">No Trims available</h4>
        <div>___________________________________________</div>
      </div>
    )
  );

  return (
    <div className="trim-avail-container">
      <div>
        <h3> Availability for {dealerships[selectedDealer].name}:</h3>
        {eachTrim}
      </div>
      <button
        id="clear-selection"
        onClick={() => {
          setSelectedDealer(0);
          setToggled(0);
        }}
      >
        CLEAR SELECTION
      </button>
    </div>
  );
};

export default TrimAvailability;
