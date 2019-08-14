import React from 'react'

import Tabbar from '../../tabbar/Tabbar'
import LoginAccount from '../../main/AccountLogin/LoginAccount'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

import { LoginContainer, LoginContent } from '../../login-content/StyledLoginContent'

export default (props) => {
  
  return (
    <LoginContainer>
      <div>
        <h3>老司机</h3>
        <h4>你的驾考首选</h4>
      </div>
      <LoginContent>
        <Tabbar></Tabbar>
        <Route path="/mine/login/account" exact component={LoginAccount}></Route>
      </LoginContent>
    </LoginContainer>
  )
}
