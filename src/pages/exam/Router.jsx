import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import SpecialTest from './specialTest/SpecialTest'
import MyError from './components/myError/MyError'
import ProblemBook from './components/problemBook/ProblemBook'

import TestQuestions  from './testQuestions/TestQuestions'
import PracticeExams from './practiceExams/PracticeExams'
// 我的收藏
import MyCollections from '../components/myCollections/MyCollections'

class Routers extends Component {
  render() {
    return (
      <Router>
        <Route path="/exam/specialTest" component={SpecialTest}></Route>
        <Route path="/exam/myError" component={MyError}></Route>
        <Route path="/exam/problemBook" component={ProblemBook}></Route>
        <Route path="/exam/orderPractice/:page" component={TestQuestions}></Route>
        <Route path="/exam/practiceExams/:page" component={PracticeExams}></Route>

        <Route path="/exam/myCollections" component={MyCollections}></Route>

      </Router>
    );
  }
}

export default Routers;