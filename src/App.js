import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './pages/index';
// import JiaXiaoDetail from './pages/apply/details/jiaxiaoDetail';

import './assets/styles/YoReset.css'

import "./assets/styles/YoReset.css";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route path="/apply" exact component={Index} />
      //   <Route path="/apply/jxdetail/" component={JiaXiaoDetail} /> 
      // </Router>
      <Index></Index>
    );
  }
}

export default App;