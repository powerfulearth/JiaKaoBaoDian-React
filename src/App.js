import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store/'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/home/Home';
import Login from './pages/mine/login/Login';

import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/mine" component={Home} exact></Route>
            <Route path="/mine/login" component={Login}></Route>
          </Switch> 
        </Router>
      </Provider>
    );
  }
}

export default App;