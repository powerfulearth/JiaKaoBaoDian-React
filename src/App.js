import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index.'

import { BrowserRouter as Router, Route } from "react-router-dom"

import Index from './pages/index';
import TestQuestions  from './pages/testQuestions/TestQuestions'
import SpecialTest from './pages/specialTest/SpecialTest'
import PracticeExams from './pages/practiceExams/PracticeExams'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Route exact path="/" component={Index}></Route>
            <Route path="/specialTest" component={SpecialTest}></Route>
            <Route path="/orderPractice" component={TestQuestions}></Route>
            <Route path="/practiceExams" component={PracticeExams}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App;