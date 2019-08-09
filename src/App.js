import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Apply from './pages/apply/router'

import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/apply" component={Apply} /> 
      </Router>
    );
  }
}

export default App;