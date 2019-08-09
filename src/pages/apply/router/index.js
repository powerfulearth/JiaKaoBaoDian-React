import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Apply from '../Apply';
import JiaXiaoDetail from '../details/jiaxiaoDetail';

// import './assets/styles/YoReset.css'

class ApplyIndex extends Component {
  render() {
    return (
      <Router>
        <Route path="/apply" exact component={Apply} />
        <Route path="/apply/jxdetail/" component={JiaXiaoDetail} />
      </Router>
    );
  }
}

export default ApplyIndex;