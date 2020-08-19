import React, { useContext } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';

export const App = () => {
  return (
    <div className="router">
      <Router>
        <Route exact path="/" component={LandingPage}/>
      </Router>
    </div>
  );
};

export default App;