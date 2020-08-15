import React, { useContext } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './stylesheets/style.css';

export const App = () => {
  return (
    <div className="router">
      <Router>
        <Route exact path="/" />
      </Router>
    </div>
  );
};
