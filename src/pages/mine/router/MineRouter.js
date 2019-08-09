import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Mine from '../Mine';
import Login from '../login/Login';

class MineRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/mine/login" exact component={Login}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MineRouter;