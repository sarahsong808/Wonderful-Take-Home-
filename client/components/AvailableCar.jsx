import React, {useState} from 'react'; 

const AvailableCar = ({img, name, price}) => {
// const trims = {0: ['LS HYBRID', 'LS F SPORT', 'LS'], 1 : ['LS HYBRID', 'LS F SPORT', 'LS'], 2: ['LS F SPORT'], 3: ['No Trims Available'] }
//const dealerships = [{name: 'Brooklyn, NY', lat: 40.6782, long: -73.9442, id: 0}, {name: 'Queens, NY', lat: 40.7282, long: -73.7949, id: 1}, {name: 'Newark, NJ', lat: 40.7357, long: -74.1724, id: 2}, {name: 'Plainfield, NJ', lat: 40.6337, long: -74.4074, id: 3}]
    //img, name, startPrice, button

    const [carRequest, setCarRequest] = useState('')
    const [error, setError] = useState('');
const [clickedRequest, setClickRequest] = useState('REQUEST QUOTE');
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
setClickRequest('REQUESTED!')
}

return(
        <div className="available-car-container"> 
            <span className="checkmark">
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div> 
            </span>
            <div>
                <img width="100" src={img}/> 
            </div> 
            <div>
                {name}
            </div>
            
            <div>
                STARTING AT ${price}
            </div>
            <button className={clickedRequest === 'REQUESTED!' ? "requested" : ""} onClick={()=>requestQuote()}>
                {clickedRequest}
            </button>
            <div>
                ___________________________________________
            </div>

        </div>
        
    ); 
}

export default AvailableCar; 