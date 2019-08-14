import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import TestQuestions  from './testQuestions/TestQuestions'
import SpecialTest from './specialTest/SpecialTest'
import PracticeExams from './practiceExams/PracticeExams'

class Routers extends Component {
  render() {
    return (
      <Router>
        <Route path="/exam/specialTest" component={SpecialTest}></Route>
        <Route path="/exam/orderPractice/:page" component={TestQuestions}></Route>
        <Route path="/exam/practiceExams" component={PracticeExams}></Route>
      </Router>
    );
  }
}

export default Routers;