import React, { useState } from 'react';
import RequestedCheckMark from './RequestedCheckMark';

const AvailableCar = ({ img, name, price }) => {
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
          <div className="available-car-name">{name}</div>

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
