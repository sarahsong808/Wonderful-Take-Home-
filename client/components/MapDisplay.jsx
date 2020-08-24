import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import TrimAvailability from './TrimAvailability'
import { MappingsContext } from 'source-list-map';
import MapPin from './MapPin';
// const TrimAvailability = ({ text }) => <div>{text}</div>;

const MapDisplay = ({dealerships, setSelectedDealer})=> {
    const [center, setCenter] = useState({lat: 40.730610, lng: -73.935242}); 
    const [zoom, setZoom] = useState(10);

    const pins = dealerships.map(data => ( <MapPin name={data.name} lat={data.lat} lng={data.long} onClick={() => setSelectedDealer(data.id)}/>))

    return (
          // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '60%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
          {pins}
      </GoogleMapReact>

    </div>
    );

}

export default MapDisplay;