import React, { Component } from 'react';
import { Route,BrowserRouter as Router } from "react-router-dom";


import JiaXiaoDetail from '../details/jiaxiaoDetail';
import AllClass from '../allClass/AllClass';
import AllCoach from '../allCoach/AllCoach';
import CoachDetail from '../coachDetail/CoachDetail';
import cityList from '../../../components/cityList/CityList';


class ApplyIndex extends Component {
  render() {
    return (
      <Router>
        <Route path="/apply/cityList/" exact component={cityList} />
        <Route path="/apply/jxdetail/" exact component={JiaXiaoDetail} />
        <Route path="/apply/jxdetail/allclass" component={AllClass}></Route>
        <Route path="/apply/jxdetail/allcoach" exact component={AllCoach}></Route>
        <Route path="/apply/jxdetail/allcoach/jldetail" component={CoachDetail}></Route>
      </Router>
    );
  }
}

export default ApplyIndex;