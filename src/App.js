import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './pages/index';
import ApplyIndex from './pages/apply/router/applyRouter';


import './assets/styles/YoReset.css'

import "./assets/styles/YoReset.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/apply" component={ApplyIndex} /> 
      </Router>
    );
  }

}

export default App;