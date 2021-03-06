import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MappingsContext } from 'source-list-map';
import MapPin from './MapPin';

/*typically we'd use an api for asking permissions for current location and passing in the lat and lng to set to dealerships closest to you within a 
decided mile radius*/
const MapDisplay = ({
  dealerships,
  setSelectedDealer,
  selectedDealer,
  toggled,
  setToggled,
}) => {
  const [center, setCenter] = useState({ lat: 40.73061, lng: -73.935242 });
  const [zoom, setZoom] = useState(10);

  const pins = dealerships.map((data, idx) => (
    <MapPin
      name={data.name}
      lat={data.lat}
      lng={data.long}
      onClick={() => {
        setSelectedDealer(data.id);
        setToggled(data.id);
      }}
      key={data.id}
      toggled={data.id === toggled}
      selectedDealer={selectedDealer}
      dealerships={dealerships}
      key={idx}
    />
  ));

  return (
    <div className="map-display">
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
