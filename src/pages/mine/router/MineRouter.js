import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

import Login from '../login/Login'
import Register from '../register/Register'

class MineRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/mine/login" exact component={Login}></Route>
        <Route path="/mine/register" exact component={Register}></Route>
      </BrowserRouter>
    );
  }
}

export default MineRouter;