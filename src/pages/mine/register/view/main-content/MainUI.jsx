import React, { Component } from 'react'

import {StyledMainContainer, StyledTitle} from './StyledMainContainer'

import Input from '../input/InputUI'
import RegisterButton from '../button/RegisterButton'
import Clock from '../../../components/clock/Clock'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userAccount: ''
    }
  }

  callback=(userName,userAccount)=>{
    // setState方法,修改msg的值,值是由child里面传过来的
    this.setState({userName});
    this.setState({userAccount});
}

  render() {
    return (
      <StyledMainContainer>
        <StyledTitle>注册</StyledTitle>
          <Input msg='请输入手机号码'></Input>
          <div><Input msg='请输入验证码'></Input><Clock></Clock></div>
          <Input callback={this.callback} msg='请输入密码'></Input>
          <Input msg='请再次输入密码'></Input>
          <RegisterButton></RegisterButton>
      </StyledMainContainer>
    )
  }
}
