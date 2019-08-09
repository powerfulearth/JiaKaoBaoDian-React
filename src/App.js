import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import store from './store/index.'
import ApplyIndex from './pages/apply/router/applyRouter';
import Index from './pages/index';
import Exam from './pages/exam/Router'

import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Index} />
          <Route path="/apply" component={ApplyIndex} />
          <Route path="/exam" component={Exam}></Route>
        </Router>
      </Provider>
    );
  }

}

export default App;