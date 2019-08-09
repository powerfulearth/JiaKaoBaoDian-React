import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './pages/index';
import JiaXiaoDetail from './pages/apply/details/jiaxiaoDetail';

import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/jxdetail/" component={JiaXiaoDetail} />
      </Router>
    );
  }
}

export default App;