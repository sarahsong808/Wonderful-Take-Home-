import React, { useState, useEffect } from 'react';
import MapDisplay from './MapDisplay'; 
import TrimAvailability from './TrimAvailability';

const MapWrapper = props => {
    //array of objects with name, trims, name of trims (id), lat, long, id of dealership location
    //selected dealer is automatically on brooklyn
const [trimData, setTrimData] = useState([]);
const [selectedDealer, setSelectedDealer] = useState(0); 
//mock data
/* **Location 1:** A dealership in Brooklyn, NY - All 3 trims are available
	- **Location 2:** A dealership in Queens, NY - LS and LS HYBRID
	- **Location 3:** A dealership in Newark, NJ - LS F SPORT
    - **Location 4:** A dealership in Plainfield, NJ - 0 trims available
    */
   //

   const trims = {0: ['LS HYBRID', 'LS F SPORT', 'LS'], 1 : ['LS HYBRID', 'LS F SPORT', 'LS'], 2: ['LS F SPORT'], 3: ['No Trims Available'] }
const dealerships = [{name: 'Brooklyn, NY', lat: 40.6782, long: -73.9442, id: 0}, {name: 'Queens, NY', lat: 40.7282, long: -73.7949, id: 1}, {name: 'Newark, NJ', lat: 40.7357, long: -74.1724, id: 2}, {name: 'Plainfield, NJ', lat: 40.6337, long: -74.4074, id: 3}]

return(
    <div>
        <h2>S E L E C T       Y O U R   D E A L E R S H I P</h2>
        <p id="map-description">Using the map, below, click on the map marker that represents the nearest dealership to see all available LS trims</p>
<div className='map-wrapper'>
    <MapDisplay dealerships={dealerships} setSelectedDealer={setSelectedDealer}/>
    <TrimAvailability selectedDealer={selectedDealer} trims={trims} dealerships={dealerships}/>
</div>
</div>
  )  
}

export default MapWrapper; 