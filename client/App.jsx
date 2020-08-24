import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';

export const App = () => {
  return (
    <div className="router">
      <Router>
        <Route exact path="/" component={LandingPage}/>
        {/* <Route exact path="/home" component={HomePage}/> */}
        {/* <Route exact path="/about" component={AboutPage}/> */}
        {/* <Route exact path="/contact" component={ContactPage}/> */}

      </Router>
    </div>
  );
};

export default App;