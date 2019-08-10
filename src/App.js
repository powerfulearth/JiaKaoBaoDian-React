import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store/'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/home/Home';
import Register from './pages/mine/login/register/Register';
import Phone from './pages/mine/login/Login';
import Wechat from './pages/mine/login/wechat/LoginWechat';
import Account from './pages/mine/login/account/LoginAccount';
import ResetCode from './pages/mine/login/reset-code/ResetCode';


import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/mine" component={Home} exact></Route>
            <Route path="/mine/register" component={Register}></Route>
            <Route path="/mine/login/phone" component={Phone}></Route>
            <Route path="/mine/login/wechat" component={Wechat}></Route> 
            <Route path="/mine/login/account" component={Account}></Route>
            <Route path="/mine/reset-code" component={ResetCode}></Route>
          </Switch> 
        </Router>
      </Provider>
    );
  }
}

export default App;