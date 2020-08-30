import React, { useState } from 'react';
import RequestedCheckMark from './RequestedCheckMark';

const AvailableCar = ({ img, name, price }) => {
  // const trims = {0: ['LS HYBRID', 'LS F SPORT', 'LS'], 1 : ['LS HYBRID', 'LS F SPORT', 'LS'], 2: ['LS F SPORT'], 3: ['No Trims Available'] }
  //const dealerships = [{name: 'Brooklyn, NY', lat: 40.6782, long: -73.9442, id: 0}, {name: 'Queens, NY', lat: 40.7282, long: -73.7949, id: 1}, {name: 'Newark, NJ', lat: 40.7357, long: -74.1724, id: 2}, {name: 'Plainfield, NJ', lat: 40.6337, long: -74.4074, id: 3}]
  //img, name, startPrice, button
  //these are not being used but I set it up for the request quote function
  const [carRequest, setCarRequest] = useState('');
  const [error, setError] = useState('');
  const [clickedRequest, setClickRequest] = useState('REQUEST QUOTE');
  const [requestButtonClicked, setRequestButtonClicked] = useState(false);
  //typically we'd be grabbing the unique id specified by the API but because i created the dummy data, I'm just using the name

  const requestQuote = name => {
    // fetch ('api', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(name)
    // })
    // return response.json(); // parses JSON response into native JavaScript objects

    // .catch(err => setError(err))
    // }
    setClickRequest('REQUESTED!');
  };

  const requestButtonClickedDisplay =
    requestButtonClicked === true ? <RequestedCheckMark /> : null;
  return (
    <div>
      <div className="available-car-container">
        {requestButtonClickedDisplay}
        <div className="available-car-image">
          <img width="100" src={img} />
        </div>
        <div className="car-info-with-button">
          <div>{name}</div>

          <div>STARTING AT ${price}</div>
          <button
            className={
              clickedRequest === 'REQUESTED!' ? 'requested' : 'request-quote'
            }
            onClick={() => {
              requestQuote();
              setRequestButtonClicked(true);
            }}
          >
            {clickedRequest}
          </button>
        </div>
      </div>
      <div>___________________________________________</div>
    </div>
  );
};

export default AvailableCar;
