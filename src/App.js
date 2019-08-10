import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index'

import { BrowserRouter as Router, Route } from "react-router-dom"

import Index from './pages/index';
import Exam from './pages/exam/Router'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Index}></Route>
          <Route path="/exam" component={Exam}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App;