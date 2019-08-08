import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store/'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './pages/home/Home';
import Login from './pages/login/Login';

import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch> 
        </Router>
      </Provider>
    );
  }
}

export default App;