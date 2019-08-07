import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index.'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Index from './pages/index';
import TestQuestions  from './pages/testQuestions/testQuestions.jsx'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/test" component={TestQuestions}>
              {/* <Redirect to="/test/answer"></Redirect> */}
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;