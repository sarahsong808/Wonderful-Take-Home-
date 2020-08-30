import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { MappingsContext } from 'source-list-map';
import MapPin from './MapPin';

// const TrimAvailability = ({ text }) => <div>{text}</div>;
//typically we'd use an api for asking permissions for current location and passing in the lat and lng to set to dealerships closest to you within a decided mile radius
const MapDisplay = ({ dealerships, setSelectedDealer }) => {
  const [center, setCenter] = useState({ lat: 40.73061, lng: -73.935242 });
  const [zoom, setZoom] = useState(10);
  const [selectPin, setSelectPin] = useState('./black-pin.png');

  const pins = dealerships.map(data => (
    <MapPin
      name={data.name}
      lat={data.lat}
      lng={data.long}
      onClick={() => {
        setSelectedDealer(data.id);
        setSelectPin('../assets/red-pin.png');
      }}
      key={data.id}
      selectPin={selectPin}
    />
  ));

  return (
    // Important! Always set the container height explicitly
    <div className="map-display" style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE IF NOT USING DEVELOPMENT USE*/ }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {pins}
      </GoogleMapReact>
    </div>
  );
};

export default MapDisplay;
