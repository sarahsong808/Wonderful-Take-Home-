import React, { useState, useEffect } from 'react';
import MapDisplay from './MapDisplay'; 
import TrimAvailability from './TrimAvailability';

const MapWrapper = props => {
    //array of objects with name, trims, name of trims (id), lat, long, id of dealership location
    //selected dealer is automatically on brooklyn
const [trimData, setTrimData] = useState([]);
const [selectedDealer, setSelectedDealer] = useState(1); 
//mock data
/* **Location 1:** A dealership in Brooklyn, NY - All 3 trims are available
	- **Location 2:** A dealership in Queens, NY - LS and LS HYBRID
	- **Location 3:** A dealership in Newark, NJ - LS F SPORT
    - **Location 4:** A dealership in Plainfield, NJ - 0 trims available
    */
   //
   const trims = {1: ['LS HYBRID', 'LS F SPORT', 'LS'], 2 : ['LS HYBRID', 'LS F SPORT', 'LS'], 3: ['LS HYBRID', 'LS'] }
const dealerships = [{name: 'Brooklyn, NY', lat: 40.6782, long: -73.9442, id: 1}, {name: 'Brooklyn, NY', lat: 40.6782, long: -73.9442, id: 3}, {name: 'Queens, NY', lat: 40.7282, long: -73.7949, id: 2}]

return(
<div>
    <MapDisplay dealerships={dealerships} setSelectedDealer={setSelectedDealer}/>
INSIDE MAP WRAPPER
    <TrimAvailability selectedDealer={selectedDealer} trims={trims} />
</div>
  )  
}

export default MapWrapper; 