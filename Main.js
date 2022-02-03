import React from 'react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom'



function Main() {

  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>

  );
}

export default Main;
