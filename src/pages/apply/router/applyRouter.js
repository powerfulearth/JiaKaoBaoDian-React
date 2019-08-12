import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom";

import JiaXiaoDetail from '../details/jiaxiaoDetail';

// import './assets/styles/YoReset.css'

class ApplyIndex extends Component {
  render() {
    return (
      <Switch>
        <Route path="/apply/jxdetail" exact component={JiaXiaoDetail} />
      </Switch>
    );
  }
}

export default ApplyIndex;