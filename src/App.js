import React, { Component } from 'react';
import { Provider } from 'react-redux'

import MineIndex from './pages/mine/router/MineRouter';
import store from './store/'

import {
  BrowserRouter as Router,Route,
} from 'react-router-dom'


import './assets/styles/YoReset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route path="/mine" component={MineIndex}></Route>
      </Provider>
    );
  }
}

export default App;