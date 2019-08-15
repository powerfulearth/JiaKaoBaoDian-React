import React, { Component } from 'react'

import { LoginPhoneContainer } from './StyledLoginAccount'

import Clock from '../../components/clock/Clock';

export default class LoginAccountContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LoginPhoneContainer>
        <div className="LoginContainer">
          <div>
            <input type="text"/>
          </div>
          <div>
            <i className="le"></i><input type="text"/> <Clock></Clock>
          </div>
        </div>
        <div>
          <p><i></i>同意用户使用协议</p>
          <span>忘记密码</span>
        </div>
        <div>登录</div>
        <div><span></span></div>
        <div><a href="/register">免费注册</a> </div>
      </LoginPhoneContainer>
    )
  }
}
