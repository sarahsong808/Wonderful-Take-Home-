import React, { useState, useEffect } from 'react';
import MapDisplay from './MapDisplay';
import TrimAvailability from './TrimAvailability';

const MapWrapper = props => {
  //array of objects with name, trims, name of trims (id), lat, long, id of dealership location
  //selected dealer is automatically on brooklyn
  const [trimData, setTrimData] = useState({});
  const [selectedDealer, setSelectedDealer] = useState(0);
  
  //typically useEffect with fetcth for this data
  const trims = {
    0: ['2020 LS HYBRID', '2020 LS F SPORT', '2020 LS'],
    1: ['2020 LS HYBRID', '2020 LS'],
    2: ['2020 LS F SPORT'],
    3: ['None Available'],
  };

  const dealerships = [
    { name: 'Brooklyn', lat: 40.6782, long: -73.9442, id: 0 },
    { name: 'Queens', lat: 40.7282, long: -73.7949, id: 1 },
    { name: 'Newark', lat: 40.7357, long: -74.1724, id: 2 },
    { name: 'Plainfield', lat: 40.6337, long: -74.4074, id: 3 },
  ];

  return (
    <div className="select-dealership-wrapper">
      <div id="headline">
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_56607.png"
          width="20"
          height="20"
        />
        <h2>SELECT YOUR DEALERSHIP</h2>
      </div>
        <p id="map-description">
          Using the map, below, click on the map marker that represents the
          nearest dealership to see all available LS trims
        </p>
      <div className="map-wrapper">
        <div className="map-display">
          <MapDisplay
            dealerships={dealerships}
            selectedDealer={selectedDealer}
            setSelectedDealer={setSelectedDealer}
          />
        </div>
        <div className="trim-availability">
          <TrimAvailability
            selectedDealer={selectedDealer}
            trims={trims}
            dealerships={dealerships}
          />
        </div>
      </div>
    </div>
  );
};

export default MapWrapper;
